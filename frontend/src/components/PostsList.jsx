import { useState, useEffect } from 'react';

import Post from './Post';

import classes from './PostList.module.css';

function PostsList() { 
   const [posts, setPosts] = useState([]);
   const [isFetching, setIsFetching] = useState(false);

   useEffect(()=>{ // prevents an infinite loop of fetching posts by only running the effect not everytime the component func exec.
    async function fetchPosts(){ 
        setIsFetching(true);
        const response = await fetch('http://localhost:8080/posts');
        const resData = await response.json();
       // if(!response.ok){} // exercise when resp is not fetching posts-error handling

        setPosts(resData.posts); //update the posts state with the fetched data, which will trigger a re-render of the component to display the new posts.
        setIsFetching(false);
    }

    fetchPosts();
   },[]); //

   function addPostHandler(postData){
    fetch('http://localhost:8080/posts',{ //used to get http reqest to backend and add post to database
       method:'POST',
       body: JSON.stringify(postData), //converts the postData object into a JSON string to be sent in the request body
       headers: {
        'Content-Type':'application/json'
       }
    });
    setPosts((existingPosts) =>[postData,...existingPosts]);
   }

  return (
    <>
     { !isFetching && posts.length >0 && ( // if there are posts and not currently fetching, display the list of posts
     <ul className={classes.post}>
        {posts.map((post)=> (
            <Post key={post.body} author={post.author} body={post.body}/>
    ))}
    </ul>
     )}
     { !isFetching && posts.length ===0 && ( // if there are no posts and not currently fetching, display a message to the user
        <div style ={{textAlign:'center', color:'white'}}>
        <h2> There are no posts yet.</h2>
        <p> Start adding a post!</p>
        </div>
  )}
  {isFetching && (
    <div style ={{textAlign:'center', color:'white'}}>
    <p>Loading posts...</p>
   </div>
  )}
   </>
 );
}

export default PostsList;