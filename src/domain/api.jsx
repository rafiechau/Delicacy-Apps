import axios from "axios";

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';
// https://www.themealdb.com/api/json/v1/1/categories.php

export const getAllCategories = async () => {
    try{
        const response = await axios.get(`${BASE_URL}/categories.php`);

        return response.data
    }catch(error){
        console.log(error)
    }
}


export const getAllRecipies = async () => {
    try{
        const response = await axios.get(`${BASE_URL}/search.php?s=A`);
        return response.data
    }catch(error){
        console.log(error)
    }
}



export const getDetailData = async (category) => {
    try{
        const response = await axios.get(`${BASE_URL}/filter.php?c=${category}`);

        return response.data
    }catch(error){
        console.error("Error fetching detail data:", error);
    }
}

export const getFullDetailData = async(mealId) => {
    try{
        const response = await axios.get(`${BASE_URL}/lookup.php?i=${mealId}`);

        return response.data
    }catch(error){
          console.log(error)
    }
}