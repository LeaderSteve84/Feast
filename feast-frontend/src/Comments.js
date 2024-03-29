import './Comments.css';
import { useState } from 'react';

const Comments = () => {
   const [ recipeLabel, setRecipeLabel ] = useState("");
   const [ commentTexts, setCommentTexts] = useState("");
        
   const handleCommentsSubmit = (e) => {
           e.preventDefault();
           const comment = { recipeLabel, commentTexts };
           console.log(comment);
   }

   return (
      <div className="comments">
        <h3>Comments</h3>
       <form onSubmit={ handleCommentsSubmit }>
       <div className="comment-contents-wrapper">
        <input 
           type="text"
           required
           placeholder="Input recipe name..."
           value={ recipeLabel }
           onChange={(e) => setRecipeLabel(e.target.value)}
        />
        <textarea 
           type="text"
           required
           placeholder="Type your comment....."
           value={ commentTexts }
           onChange={(e) => setCommentTexts(e.target.value)}
        />
       </div>
       <button className="button" type="Submit">Comment</button>
       </form>
      </div>
   );
}

export default Comments;
