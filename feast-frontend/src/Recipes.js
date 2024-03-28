import { useState } from 'react';
import SearchBar from './SearchBar';
import RecipesList from './RecipesList';
import useFetch from './useFetch';
import useDebounce from './useDebounce';

const Recipes = () => {
    
   const [searchInput, setSearchInput] = useState(null);
 
        const debouncedSearch = useDebounce(searchInput, 1000);

        const ID = "7b6bc7d2";
        const KEY = "86969d07c7c1ae899323ad85b6eca8ef";
        const URL = `https://api.edamam.com/api/recipes/v2/?q=${debouncedSearch}&app_id=${ID}&app_key=${KEY}&type=public`;
        
        console.log(debouncedSearch);
        
        const { recipesData, isPending, error } = useFetch(URL);

        console.log(recipesData);

    return ( 
        <div className="recipesData">
            <SearchBar searchInput={searchInput} setSearchInput={setSearchInput}/>
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { recipesData && <RecipesList  recipesData={recipesData} /> }
        </div>
     );
}
 
export default Recipes;
