import { useState, useEffect } from 'react';

const RecipesList = ({ recipesData }) => {
  const [storedDatas, setStoredDatas] = useState([]);

  // Store recipe image URL and label for potential future use
  const handleStoreData = (url, label) => {
    setStoredDatas(prevData => [...prevData, { url, label }]);
  };

  // Log stored data for debugging
  useEffect(() => {
    console.log("Stored data:", storedDatas);
  }, [storedDatas]);

  // Populate stored data on recipesData change
  useEffect(() => {
    if (recipesData?.hits) {
      recipesData.hits.forEach((eachRecipe) => {
        handleStoreData(eachRecipe.recipe.images.REGULAR.url, eachRecipe.recipe.label);
      });
    }
  }, [recipesData]);

  // Handle image click with a placeholder for future interactivity
  const handleImageClick = () => {
    console.log("Recipe image clicked");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipesData?.hits?.map((eachRecipe, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            {eachRecipe.recipe.images.SMALL ? (
              <img
                src={eachRecipe.recipe.images.REGULAR.url}
                alt={eachRecipe.recipe.label}
                className="w-full h-48 object-cover rounded-t-lg"
                onClick={handleImageClick}
              />
            ) : (
              <div className="w-full h-48 flex items-center justify-center bg-gray-100 text-gray-500 rounded-t-lg">
                No image available
              </div>
            )}
            <div className="p-4">
              <ul className="space-y-2">
                <li>
                  <span className="inline-block px-2 py-1 text-sm font-semibold text-white bg-green-600 rounded-full">
                    Label
                  </span>{' '}
                  {eachRecipe.recipe.label}
                </li>
                <li>
                  <span className="inline-block px-2 py-1 text-sm font-semibold text-white bg-green-600 rounded-full">
                    Ingredients
                  </span>
                  <div className="mt-1 space-y-1">
                    {eachRecipe.recipe.ingredientLines.map((line, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-green-600 mr-1">•</span> {line}
                      </div>
                    ))}
                  </div>
                </li>
                <li>
                  <span className="inline-block px-2 py-1 text-sm font-semibold text-white bg-green-600 rounded-full">
                    Cuisine Type
                  </span>{' '}
                  {eachRecipe.recipe.cuisineType}
                </li>
                <li>
                  <span className="inline-block px-2 py-1 text-sm font-semibold text-white bg-green-600 rounded-full">
                    Meal Type
                  </span>{' '}
                  {eachRecipe.recipe.mealType}
                </li>
                <li>
                  <span className="inline-block px-2 py-1 text-sm font-semibold text-white bg-green-600 rounded-full">
                    Health Labels
                  </span>
                  <div className="mt-1 space-y-1">
                    {eachRecipe.recipe.healthLabels.map((health, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-green-600 mr-1">•</span> {health}
                      </div>
                    ))}
                  </div>
                </li>
                <li>
                  <span className="inline-block px-2 py-1 text-sm font-semibold text-white bg-green-600 rounded-full">
                    Calories
                  </span>{' '}
                  {Math.round(eachRecipe.recipe.calories)} kcal
                </li>
                <li>
                  <span className="inline-block px-2 py-1 text-sm font-semibold text-white bg-green-600 rounded-full">
                    CO2 Emissions Class
                  </span>{' '}
                  {eachRecipe.recipe.co2EmissionsClass}
                </li>
                <li>
                  <span className="inline-block px-2 py-1 text-sm font-semibold text-white bg-green-600 rounded-full">
                    Total Time
                  </span>{' '}
                  {eachRecipe.recipe.totalTime} min
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesList;
