const RecipesList = (props) => {

  const recipesData = props.recipesData;

  return (
     <div className="recipes-list">
     { recipesData.map((recipe) => (
         <div className="recipe" key={recipe.id}>
            <h3>Recipe meal image: { recipe.img }</h3>
            <p>Recipe name: { recipe.name }</p>
            <p>Ingredient for meal: { recipe.ingredient }</p>
            <p>Cocking Time: { recipe.cockingTime }</p>
         </div>
     ))}
     </div>
  );
}

export default RecipesList;
