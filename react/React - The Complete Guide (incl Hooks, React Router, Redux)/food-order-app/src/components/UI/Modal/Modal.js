import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const overlayroot = document.getElementById("overlays");

const Backdrop = props => {
    return <div className={classes.backdrop}></div>
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const Modal = (props) => {
  return <>
    {ReactDOM.createPortal(<Backdrop/>, overlayroot)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlayroot)}
  </>;
};

export default Modal;
