import { useState, useEffect } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostList.module.css';

function PostsList(isPosting,onStopPosting) { 
   const [posts, setPosts] = useState([]);

   useEffect(()=>{ // prevents an infinite loop of fetching posts by only running the effect not everytime the component func exec.
    async function fetchPosts(){ 
        const response = await fetch('http://localhost:8080/posts');
        const resData = await response.json();
        setPosts(resData.posts); //update the posts state with the fetched data, which will trigger a re-render of the component to display the new posts.
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
        {isPosting && ( 
        <Modal onClose={onStopPosting}>
            <NewPost onCancel={onStopPosting} onAddPost = {addPostHandler} />
        </Modal> 
     )}
     {posts.length >0 && (
     <ul className={classes.post}>
        {posts.map((post)=> (
            <Post key={post.body} author={post.author} body={post.body}/>
    ))}
    </ul>
     )}
     {posts.length ===0 && (
        <div style ={{textAlign:'center', color:'white'}}>
        <h2> There are no posts yet.</h2>
        <p> Start adding a post!</p>
        </div>
  )}
   </>
 );
}

export default PostsList;