//import { useState } from 'react';

const Recipes = () => {
    
    // const [recipesData, setRecipesData] = useState(
       const recipesData = [
            { id: 1, img: 'nice shot', name: 'fufu', ingredient:['1. salt ', '2. thyme ', '3. pepper '], cockingTime: '45 minutes ' },
            { id: 2, img: 'good shot', name: 'jollof', ingredient:['1. tomatoes ', '2. thyme ', '3. pepper ', '4. curry '], cockingTime: '45 minutes' },
            { id: 3, img: 'better shot', name: 'amala', ingredient:['1. yam powder ', '2. salt ', '3. thyme ', '4. pepper'], cockingTime: '45 minutes' }
    ];
    
    return ( 
        <div className="recipesData">
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
 
export default Recipes;
