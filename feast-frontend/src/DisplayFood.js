import food_a from './foodimages/food_a.jpg'

const DisplayFood = () => {

    let foodName = "Maize Poddy";
    let recipes = ["Curry, ", "Thyme, ", "Knor, ", "Chili pepper, ", "Refined Vegetable Oil,"]
    // let foodImage = <img src= alt="" />
    return ( 
        <div className="displayfoods">
            <p className="pointer">See <img src="" alt="see below" className="image-pointer"/> sample of foods and their recipes.</p>
            <div className="foodImages">
                <img src={ food_a } alt="sample food" height={400} width={400} />
            </div>
            <p className="name-recipes-comment">
                <span className="name">Name: { foodName } </span><br />
                <span className="recipes">Recipes: { recipes } </span><br />
                <span className="homeComment">Comment:</span> <input type="text" className="input" />
            </p>
        </div>
     );
}
 
export default DisplayFood;