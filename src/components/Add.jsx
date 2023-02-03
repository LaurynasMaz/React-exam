import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
   const [posts, setPosts] = useState([])
   const [formInputs, setFormInputs] = useState({
      text: '',
      description:''
   });


   const addNewPost = async (newPost) => {
      const response = await fetch('http://localhost:5000/posts', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(newPost),
      });
      const data = await response.json();
      setPosts([...posts, data]);
   };

   const navigation = useNavigate();

   const handleSubmit = e => {
      e.preventDefault();
      const newPost = {
         id: Date.now(),
         text: formInputs.text,
         description:formInputs.description
      };

      addNewPost(newPost);

      navigation('/home');
   }

   return (
      <div className='form-container'>
         <form onSubmit={handleSubmit}>
            <label>
               Text:
               <input type="text" name="text"
                  value={formInputs.text}
                  onChange={(e) => setFormInputs({...formInputs, text:e.target.value})}
               />
            </label>
            <label>
               Description:
               <textarea name="description"
                  value={formInputs.description}
                  onChange={(e) => setFormInputs({...formInputs, description:e.target.value})}
               />
            </label>
               <div className="buttonClass">
               <button type="submit">Add new Post</button>
               </div>
         </form>
      </div>
   );
}
 
export default Add;