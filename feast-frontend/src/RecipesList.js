import './RecipesList.css';

const RecipesList = (props) => {

  const recipesData = props.recipesData;
        
  return (
     <div className="recipes-list">
     { recipesData.hits.map((eachRecipe, index) => (
         <div className="recipe-card" key={index}>
             { eachRecipe.recipe.images.SMALL ? (
                     <img src={eachRecipe.recipe.images.REGULAR.url} height={300} width={300} alt={eachRecipe.recipe.label} />
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
