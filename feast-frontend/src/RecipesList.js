import { useState, useEffect } from 'react';
import './RecipesList.css';

const RecipesList = (props) => {

  const recipesData = props.recipesData;
  const [storedDatas, setStoredDatas] = useState([]);
  
  const handleStoreData = (url, label) => {
        const newData = {[url]:label};
        setStoredDatas(prevData => {
                const updatedData = [...prevData, newData];
                return updatedData;
        });
  };
  console.log("store data:", storedDatas);

  useEffect(() => {
        recipesData.hits.forEach((eachRecipe) => {
                handleStoreData(eachRecipe.recipe.images.REGULAR.url, eachRecipe.recipe.label);
        });
  }, [recipesData]);

  const handleImageClick = () => {
        console.log("Ninja Image Click");
  }


  return (
     <div className="recipes-list">
     { recipesData.hits.map((eachRecipe, index) => (
         <div className="recipe-card" key={index}>
             { eachRecipe.recipe.images.SMALL ? (
                     <img src={eachRecipe.recipe.images.REGULAR.url} height={300} width={300} alt={eachRecipe.recipe.label} onClick={ handleImageClick } />
                     ) : (
                     <p> No image available </p>
             )}
         <div className="recipe-info">
             <ul>
                <li> <span>Label</span> { eachRecipe.recipe.label } </li>
                <li> <span>Ingredients </span> { eachRecipe.recipe.ingredientLines.map((line, index) => (
                        <div className="ingredient-lines" key={index}>
                          <span className="bullet"> - </span> { line }
                        </div>
                )) } </li>
                <li> <span>Cuisine Type</span> { eachRecipe.recipe.cuisineType } </li>
                <li> <span>Meal Type</span> { eachRecipe.recipe.mealType } </li>
                <li> <span>Health Labels</span> { eachRecipe.recipe.healthLabels.map((health, index) => (
                        <div className="health-labels" key={index}>
                          <span className="bullet"> - </span> { health }
                        </div>
                )) } </li> 
                <li> <span>Calories </span> { eachRecipe.recipe.calories } </li>
		<li> <span>CO2 Emissions Class </span> { eachRecipe.recipe.co2EmissionsClass } </li>
                <li> <span>Total Time</span> { eachRecipe.recipe.totalTime } </li>
             </ul>
         </div>
         </div>
     ))}
     </div>
  );
}

export default RecipesList;
