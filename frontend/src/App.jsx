//root component
import {useState} from "react";

import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
const [modalIsVisible, setModalIsVisible] = useState(false);

function showModalHandler(){
  setModalIsVisible(true);
}
function hideModalHandler(){
  setModalIsVisible(false);  // new state value
}
  return (
  <>
    <MainHeader onCreatePost={showModalHandler}/>
    <main>
    <PostsList 
    isPosting={modalIsVisible} 
    onStopPosting={hideModalHandler} 
    />
  </main>
  </>
  );
}
export default App;
