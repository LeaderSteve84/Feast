const DisplayFood = () => {

    foodName = "Maize Poddy";
    recipes = ["Curry", "Thyme", "Knor", "Chili pepper", "Refined Vegetable Oil" ];
    
    return ( 
        <div className="displayfoods">
            <p className="pointer">See <img src="" alt="see below" className="image-pointer"/> sample of foods and their recipes.</p>
            <div className="foodImages">
                <img src="" alt="Sample foods and recipes" />
            </div>
            <p>
                <span className="name">Name: { foodName } </span><br />
                <span className="recipes">Recipes: { recipes } </span>
            </p>
        </div>
     );
}
 
export default DisplayFood;