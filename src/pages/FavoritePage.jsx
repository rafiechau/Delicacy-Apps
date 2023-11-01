import React from 'react';
import CardItem from '../components/CardItem';
import CardRecipiesItem from '../components/CardRecipiesItem';


function FavoritePage(){
    const storedData = localStorage.getItem('favorites');
    const data = JSON.parse(storedData)
    console.log(data[0].strMeal)
    return(
        <>
           <CardRecipiesItem title={data[0].strMeal} imageUrl={data[0].strMealThumb}/>
        </>
    )
}

export default FavoritePage;