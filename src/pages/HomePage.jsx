import React from 'react';
import Classes from "../styles/styles.module.scss";
import { useEffect, useState } from 'react';
import CardItem from '../components/CardItem';
import CardRecipiesItem from '../components/CardRecipiesItem';
import { getAllCategories, getAllRecipies, getDetailData, getFullDetailData } from '../domain/api';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

import Navigation from '../components/Navigation';
function HomePage(){
    const [categories, setCategories] = useState([])
    const [meals, setMeals] = useState([])
    const [mealDetails, setMealDetails] = useState([]);
    const [recipies, setRecipies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try{
                const data = await getAllCategories();
                const sliceData = data.categories.slice(0, 5);
                
                setCategories(sliceData)
                // console.log(data);
            }catch(error){
                console.log('Gagal mengambil data negara:', error)
            }
        }
        getData()
        fetchData("Beef")
    }, [])

    useEffect(() => {
        const getData = async () => {
            try{
                const data = await getAllRecipies();
                const sliceData = data.meals.slice(0, 5);
                setRecipies(sliceData)
            }catch(error){
                console.log('Gagal mengambil data negara:', error)
            }
        }
        getData()
    }, [])

    const fetchMealDetails = async (mealId) => {
        try {
            const response = await getFullDetailData(mealId)
            return response.meals[0];
        } catch (error) {
            console.log("Error fetching meal details:", error);
        }
    }

    const fetchData = async (category) => {
        try {
            const data = await getDetailData(category)
            // console.log(response)
            // const data = await response.json();

            const firstFiveMeals = data.meals.slice(0, 5);
            setMeals(firstFiveMeals);
            const detailsPromises = firstFiveMeals.map(meal => fetchMealDetails(meal.idMeal));
            const details = await Promise.all(detailsPromises);
            setMealDetails(details);
        } catch (error) {
            console.log("Error fetching meals:", error);
        }
    }

    return(
        <>
            <Header />
            <Navigation categories={categories} fetchData={fetchData} />

            <div className={Classes.slidercontainer}>
            {mealDetails.map((detail, idx) => (
                    <CardItem key={idx} mealDetail={detail} meal={meals[idx]} />
                ))}
            </div>
            
            <div className={Classes.listrecipies}>
            <h3 className={Classes.titlerecipies}><p>More recipies</p></h3>
            <div style={{ display: 'flex', justifyContent: 'start', paddingLeft: '50px' }}>
                {recipies.map((recipe, index) => (
                    <CardRecipiesItem key={index} title={recipe.strMeal} imageUrl={recipe.strMealThumb} />
            ))}
            </div>
        </div>
        
            
        </>
    )
}
export default HomePage;