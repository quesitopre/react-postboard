import {Link,Form} from 'react-router-dom';

import classes from './NewPost.module.css';
import Modal from '../Modal';
function NewPost() {
  return (
    <Modal>
    <Form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body"  name="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name="author" required />
      </p>
      <p className={classes.actions}>
        <Link to='..' type="button" > 
          Cancel
          </Link>
        <button >Submit</button>
      </p>
    </Form>
    </Modal>
  );
}

export default NewPost;

export function action() {
 fetch('http://localhost:8080/posts',{ //used to get http reqest to backend and add post to database
       method:'POST',
       body: JSON.stringify(postData), //converts the postData object into a JSON string to be sent in the request body
       headers: {
        'Content-Type':'application/json'
       },
    });
}