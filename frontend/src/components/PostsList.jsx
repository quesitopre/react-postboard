import { useLoaderData } from 'react-router-dom'; //data fetching via loader()

import Post from './Post';
import classes from './PostList.module.css';

function PostsList() { 
  const posts = useLoaderData(); //used to access the data fetched by the loader function. 

  return (
    <>
     { posts.length >0 && ( // if there are posts and not currently fetching, display the list of posts
     <ul className={classes.post}>
        {posts.map((post)=> (
            <Post key={post.body} author={post.author} body={post.body}/>
    ))}
    </ul>
     )}
     {posts.length ===0 && ( // if there are no posts and not currently fetching, display a message to the user
        <div style ={{textAlign:'center', color:'white'}}>
        <h2> There are no posts yet.</h2>
        <p> Start adding a post!</p>
        </div>
  )}
   </>
 );
}

export default PostsList;