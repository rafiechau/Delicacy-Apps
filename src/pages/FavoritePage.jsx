import React, { useEffect, useState } from 'react';
import Classes from "../styles/styles.module.scss";
import CardRecipiesItem from '../components/CardRecipiesItem';
import Navigation from '../components/Navigation';
import { getAllCategories } from '../domain/api';
import Header from '../components/Header';


function FavoritePage(){
    const [categories, setCategories] = useState([])
    const storedData = localStorage.getItem('favorites');
    const data = JSON.parse(storedData)
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
        <section className={Classes.listfavorites}>
        {data.map((item, index) => (
                <CardRecipiesItem 
                    key={index} 
                    title={item.strMeal} 
                    imageUrl={item.strMealThumb}
                />
            ))}
        </section>
        </>
    )
}

export default FavoritePage;