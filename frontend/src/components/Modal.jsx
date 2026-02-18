import { useNavigate } from 'react-router-dom';// hook that allows us to navigate to a different route
import classes from './Modal.module.css';

function Modal({children}) {
    const navigate = useNavigate();

    function closeHandler(){
        navigate('..'); // navigate to the starting pg 
    }

    return ( 
    <> 
        <div className={classes.backdrop} onClick ={closeHandler}/> 
        <dialog open className={classes.modal}>
            {children}
     </dialog>
      </>
    );
}
export default Modal;