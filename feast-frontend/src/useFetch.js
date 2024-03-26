import { useState, useEffect } from 'react';

const useFetch = (url) => {
   
   const [ recipesData, setRecipesData ] = useState(null);
   const [ isPending, setIsPending ] = useState(true);
   const [ error, setError ] = useState(null);
   
   useEffect(() => {
      fetch(url)
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
   }, [url]);

   return { recipesData, isPending, error }
}

export default useFetch;
