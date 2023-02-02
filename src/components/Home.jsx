import React, { useState, useEffect } from 'react';

const Home = () => {
   const [posts, setPosts] = useState([]);
   
   const fetchFromServer = async () => {
      const response = await fetch('http://localhost:5000/posts')
         .then(response => response.json())

      setPosts(response)
    };
 
    useEffect(() => {
      fetchFromServer();
    }, []);

   return ( 
      <>
       <div className='posts'>
         {posts.length === 0 ? (
            <p>No posts available</p>
         ) : (
            posts ? (
            posts.map((post) => (
               <div key={post.id} className="post">
                  <h2>{post.text}</h2>
                  <p>{post.description}</p>
               </div>
            ))
         ) : (
            <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading"/>
         )
      )}
   </div>
     </>
   );
}
 
export default Home;