import { Link, useParams } from "react-router-dom";
import Classes from "../styles/styles.module.scss";
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
            <div className={Classes.recipecard}>
            <div className={Classes.cardcontainer}>
                <div className={Classes.cardcontent}>
                <div className={Classes.title}><h2>{mealDetail?.strMeal}</h2></div>
                <div className={Classes.description}>
                    <p>{mealDetail?.strInstructions}</p>
                    <h3 className={Classes.titleingredients}><p>Ingredients</p></h3>
                    <div className={Classes.ingredientslist}>
                        {sliceData.map((ingredient, idx) => (
                                <div className={Classes.ingredient} key={idx}>
                                    <div className={Classes.cardingredientimg}>
                                        <div className={Classes.cardingredientcontainer}>
                                            <img src="../../public/assets//olive-oil.svg" />
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