// import {} from 'react;

const DisplayFood = () => {

    const foodImageData = [
        [<img src={ require('./foodimages/banana-pancake.jpg') } alt="recipe sample pix" height={400} width={400} />, 
        "Eggless Banana Pancake"],
        [<img src={ require('./foodimages/crispy.jpg') } alt="recipe sample pix" height={400} width={400} />, 
        "Crispy Calamari Rings"],
        [<img src={ require('./foodimages/egusi-soup.jpeg') } alt="recipe sample pix" height={400} width={400} />, 
        "Egusi Soup"],
        [<img src={ require('./foodimages/jollof-chicken.jpeg') } alt="recipe sample pix" height={400} width={400} />, 
        "Jollof Rice with Chicken"],
        [<img src={ require('./foodimages/jollof.jpeg') } alt="recipe sample pix" height={400} width={400} />, 
        "Jollof"],
        [<img src={ require('./foodimages/makhani.jpg') } alt="recipe sample pix" height={400} width={400} />, 
        "Vegan Dal Makhani"],
        [<img src={ require('./foodimages/paratha.jpg') } alt="recipe sample pix" height={400} width={400} />, 
        "Moringa Paratha"],
        [<img src={ require('./foodimages/roasted-turkey.jpg') } alt="recipe sample pix" height={400} width={400} />, 
        "Roasted Turkey"],
        [<img src={ require('./foodimages/salad.jpg') } alt="recipe sample pix" height={400} width={400} />, 
        "Strawberry Basil Feta Salad Recipe"],
        [<img src={ require('./foodimages/tikka.jpg') } alt="recipe sample pix" height={400} width={400} />, 
        "Lemon Chicken Tikka"]

    ];

    // function to shuffle array (Fisher-yates algorithm)
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    
    // Shuffle the array of food photos
    const shuffledFoodPhotos = shuffleArray(foodImageData);

    return ( 
        <div className="displayfoods">
            <p className="pointer">See <img src={ require('./foodimages/finger-pointer.jpg') } alt="see below" height={40} width={10} className="image-pointer"/> sample of dish images of some recipes.</p>
            <div className="foodImages">
                {shuffledFoodPhotos.slice(0, 10).map((photo, index) => (
                    <img key={index} src={photo[0]} alt={'Food ${index + 1}'} />
                ))}
                {/* foodImageData[0][0] */}
            </div>
            <p className="name-recipes-comment">
                <span className="name">Name: { foodImageData[0][1] } </span><br />
                <span className="homeComment">Comment:</span> <input type="text" className="input" />
            </p>
        </div>
     );
}
 
export default DisplayFood;