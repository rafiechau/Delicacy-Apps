import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { getFullDetailData } from "../domain/api";
import { useEffect, useState } from "react";
// import CardItem from "../components/CardItem";

function DetailPage(){
    const { id } = useParams();
    const [mealDetail, setMealDetail] = useState([]);
    // console.log(id)
    useEffect(() => {
        const fetchData = async () => {
            const data = await getFullDetailData(id);
            // console.log(data.meals[0])
            setMealDetail(data.meals[0]);
        };
    fetchData()
      }, [id]);


      const ingredients = [];
      for(let i = 1; i <= 20; i++) {
          const ingredient = mealDetail[`strIngredient${i}`];
          const measure = mealDetail[`strMeasure${i}`];
          if(ingredient && (ingredient.trim() !== "" && ingredient !== null)) {
              ingredients.push({ name: ingredient, measure: measure });
          }
      }
      console.log(ingredients)

      const sliceData = ingredients.slice(0,4)

    //   console.log(mealDetail)
    return(
        <>
            <Header />
            <div className="recipe-card">
            <div className="card-container">
                <div className="card-content">
                <div className="title"><h2>{mealDetail?.strMeal}</h2></div>
                <div className="description">
                    <p>{mealDetail?.strInstructions}</p>
                    <h3 className="title-ingredients"><p>Ingredients</p></h3>
                    <div className="ingredients-list">
                        {sliceData.map((ingredient, idx) => (
                                <div className="ingredient" key={idx}>
                                    <div className="card-ingredient-img">
                                        <div className="card-ingredient-container">
                                            <img src="../../public/assets//olive-oil.svg" />
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
                    <Link>Add to favorites</Link>
                </div>
                </div>
                <img src={mealDetail.strMealThumb} alt={mealDetail.strMeal} className="img-card"/>
            </div>   
            </div>
        </>
    )
}

export default DetailPage;