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
                <li> <span>Label:</span> { eachRecipe.recipe.label } </li>
                <li> <span>Ingredient Lines:</span> { eachRecipe.recipe.ingredientLines } </li>
                <li> <span>Cuisine Type:</span> { eachRecipe.recipe.cuisineType } </li>
                <li> <span>Meal Type:</span> { eachRecipe.recipe.mealType } </li>
                <li> <span>Total Time:</span> { eachRecipe.recipe.totalTime } </li>
             </ul>
         </div>
         </div>
     ))}
     </div>
  );
}

export default RecipesList;
