import React from 'react';
import { Link } from "react-router-dom";
function CardItem({mealDetail, meal}){
    // console.log(mealDetail.idMeal)
    // console.log(meal)
    const handleLike = (item) => {
        console.log(item)
        const storedFavorites = localStorage.getItem('favorites');
        let favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    // Cek apakah item sudah ada di dalam daftar favorit
    const isFavorite = favorites.some((fav) => fav.idMeal === item.idMeal);

    if (isFavorite) {
        // Jika sudah ada, hapus dari daftar
        favorites = favorites.filter((fav) => fav.idMeal !== item.idMeal);
    } else {
        // Jika belum ada, tambahkan ke daftar
        favorites.push(item);
    }

    // Simpan kembali ke local storage
    localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    const ingredients = [];
    for(let i = 1; i <= 20; i++) {
        const ingredient = mealDetail[`strIngredient${i}`];
        const measure = mealDetail[`strMeasure${i}`];
        if(ingredient && measure) {
            ingredients.push({ name: ingredient, measure: measure });
        }
    }
    const sliceData = ingredients.slice(0,4)
    return(
        <div className="recipe-card">
            <div className="card-container">
                <div className="card-content">
                <div className="title"><h2>{meal?.strMeal}</h2></div>
                <div className="description">
                    <p>{mealDetail?.strInstructions}</p>
                    <h3 className="title-ingredients"><p>Ingredients</p></h3>
                    <div className="ingredients-list">
                        {sliceData.map((ingredient, idx) => (
                                <div className="ingredient" key={idx}>
                                    <div className="card-ingredient-img">
                                        <div className="card-ingredient-container">
                                            <img src="assets/olive-oil.svg" />
                                        </div>
                                    </div>
                                    <div className="ingredient-desc-list">
                                        <span>{ingredient.name}</span>
                                        <p>{ingredient.measure}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="list-button">
                    <Link to={`/detail/${mealDetail.idMeal}`}>Detail</Link>
                    <button onClick={() => handleLike(mealDetail)}>Add to favorites</button>
                </div>
                </div>
                <img src={mealDetail.strMealThumb} alt={mealDetail.strMeal} className="img-card"/>
            </div>   
            </div>
    )
}

export default CardItem;