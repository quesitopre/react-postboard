import {useState} from 'react';
import {Link} from 'react-router-dom';

import classes from './NewPost.module.css';
import Modal from '../Modal';
function NewPost() {
 const [enteredBody,setEnteredBody] = useState('');
 const [enteredAuthor,setEnteredAuthor] = useState('');

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

     function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event){
      event.preventDefault();
      const postData ={
        body: enteredBody,
        author: enteredAuthor
      };
      fetch('http://localhost:8080/posts',{ //used to get http reqest to backend and add post to database
       method:'POST',
       body: JSON.stringify(postData), //converts the postData object into a JSON string to be sent in the request body
       headers: {
        'Content-Type':'application/json'
       }
    });
    }
 
  return (
    <Modal>
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler}/>
      </p>
      <p className={classes.actions}>
        <Link to='..' type="button" > 
          Cancel
          </Link>
        <button >Submit</button>
      </p>
    </form>
    </Modal>
  );
}

export default NewPost;