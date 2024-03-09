import food_a from './foodimages/food_a.jpg'

const DisplayFood = () => {

    const foodImageData = [
        <img src={ food_a } alt="sample food" height={400} width={400} />, 
        "Maize Poddy", 
        ["Curry, ", "Thyme, ", "Knor, ", "Chili pepper, ", "Refined Vegetable Oil,"] 
    ]
        
    return ( 
        <div className="displayfoods">
            <p className="pointer">See <img src="" alt="see below" className="image-pointer"/> sample of foods and their recipes.</p>
            <div className="foodImages">
                { foodImageData[0] }
            </div>
            <p className="name-recipes-comment">
                <span className="name">Name: { foodImageData[1] } </span><br />
                <span className="recipes">Recipes: { foodImageData[2] } </span><br />
                <span className="homeComment">Comment:</span> <input type="text" className="input" />
            </p>
        </div>
     );
}
 
export default DisplayFood;