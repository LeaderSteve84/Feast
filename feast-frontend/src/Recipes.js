import { useState } from 'react';
import SearchBar from './SearchBar';
import RecipesList from './RecipesList';
import useFetch from './useFetch';
import useDebounce from './useDebounce';

const Recipes = () => {
  const [searchInput, setSearchInput] = useState('');

  const debouncedSearch = useDebounce(searchInput, 1000);

  const ID = process.env.REACT_APP_EDAMAM_ID;
  const KEY = process.env.REACT_APP_EDAMAM_KEY;
  const URL = `https://api.edamam.com/api/recipes/v2/?q=${debouncedSearch}&app_id=${ID}&app_key=${KEY}&type=public`;

  const { recipesData, isPending, error } = useFetch(URL);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Find Your Perfect Recipe
      </h2>
      <div className="max-w-2xl mx-auto mb-8">
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
      {isPending && (
        <div className="text-center text-gray-600 text-lg">
          Have a wonderful search Experience.
        </div>
      )}
      {error && (
        <div className="text-center text-red-500 text-lg bg-red-50 p-4 rounded-lg max-w-2xl mx-auto">
          {error}
        </div>
      )}
      {recipesData && <RecipesList recipesData={recipesData} />}
    </div>
  );
};

export default Recipes;
