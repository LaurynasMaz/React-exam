import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';


const Home = () => {
   const [posts, setPosts] = useState(null);
   const {loggedInUser} = useContext(UserContext)
   
   const fetchFromServer = async () => {
      const response = await fetch('http://localhost:5000/posts')
         .then(response => response.json())  

      console.log(response)

      setPosts(response)
    };
 
    useEffect(() => {
      fetchFromServer();
    }, []);

   const renderPosts = () =>{
      if (!loggedInUser) return (<p>Please sign in</p>)
      if (posts?.length === 0) return (<p>No posts available</p>);
      if (!posts) return (<img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading"/>)

      return (
         posts.map((post) => (
         <div key={post.id} className="post">
            <h2>{post.text}</h2>
            <p>{post.description}</p>
         </div>
      )))
   }

   return ( 
      <>
      {renderPosts()}
      </>
   );
}
 
export default Home;