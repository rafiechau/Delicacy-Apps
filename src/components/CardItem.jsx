import React from 'react';
import Classes from "../styles/styles.module.scss";
import { Link } from "react-router-dom";
function CardItem({mealDetail, meal}){

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
        <div className={Classes.recipecard}>
            <div className={Classes.cardcontainer}>
                <div className={Classes.cardcontent}>
                <div className={Classes.title}><h2>{meal?.strMeal}</h2></div>
                <div className={Classes.description}>
                    <p>{mealDetail?.strInstructions}</p>
                    <h3 className={Classes.titleingredients}><p>Ingredients</p></h3>
                    <div className={Classes.ingredientslist}>
                        {sliceData.map((ingredient, idx) => (
                                <div className={Classes.ingredient} key={idx}>
                                    <div className={Classes.cardingredientimg}>
                                        <div className={Classes.cardingredientcontainer}>
                                            <img src="assets/olive-oil.svg" />
                                        </div>
                                    </div>
                                    <div className={Classes.ingredientdesclist}>
                                        <span>{ingredient.name}</span>
                                        <p>{ingredient.measure}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className={Classes.listbutton}>
                    <Link to={`/detail/${mealDetail.idMeal}`}>Detail</Link>
                    <button onClick={() => handleLike(mealDetail)}>Add to favorites</button>
                </div>
                </div>
                <img src={mealDetail.strMealThumb} alt={mealDetail.strMeal} className={Classes.imgcard}/>
            </div>   
            </div>
    )
}

export default CardItem;