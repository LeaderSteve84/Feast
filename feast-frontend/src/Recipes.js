import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import RecipesList from './RecipesList';

const Recipes = () => {
    
   const [recipesData, setRecipesData] = useState(null);
   /*const [ isPending, setIsPending ] = (true);*/
   /*const [error, setError] = (null)*/
   const [searchInput, setSearchInput] = useState('');
 
   console.log(searchInput);
   
   useEffect(() => {
       setRecipesData([
            { id: 1, img: 'nice shot', name: 'fufu', ingredient:['1. salt ', '2. thyme ', '3. pepper '], cockingTime: '45 minutes ' },
            { id: 2, img: 'good shot', name: 'jollof', ingredient:['1. tomatoes ', '2. thyme ', '3. pepper ', '4. curry '], cockingTime: '45 minutes' },
            { id: 3, img: 'better shot', name: 'amala', ingredient:['1. yam powder ', '2. salt ', '3. thyme ', '4. pepper'], cockingTime: '45 minutes' }
         ]);
       /* fetch('url for recipes')
           .then(res => {
             if(!res.ok) {
                throw Error('could not fetch data');
             }
             return res.json();
           })
           .then(data => {
              setRecipesData(data);
              setIsPending(false);
              setError(null);
           })
           .catch(err => {
              setIsPending(false);
              setError(err.message);
           })
       */
      }, []);
   
    
    return ( 
        <div className="recipesData">
            <SearchBar  searchInput={searchInput} setSearchInput={setSearchInput}/>
            {/* isPending && <div>Loading...</div> */}
            {/* error && <div>{ error }</div>*/}
            { recipesData && <RecipesList  recipesData={recipesData} /> }
        </div>
     );
}
 
export default Recipes;
