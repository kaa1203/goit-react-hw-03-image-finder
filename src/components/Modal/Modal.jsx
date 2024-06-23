import { Component } from "react";
import css from "./Modal.module.css"

class Modal extends Component {
   componentDidMount() {
      window.addEventListener("keydown", this.handleKeyDown);
   }

   componentWillUnmount() {
      window.removeEventListener("keydown", this.handleKeyDown);
   }

   handleKeyDown = e => {
      if(e.code === "Escape") {
         this.props.closeModal();
      }
   }
   render() {
      const { largeImageURL } = this.props;
      return(
         <div className={css.overlay}>
            <div className={css.modal}>
               <img src={largeImageURL} alt="modal" loading="lazy"/>
            </div>
         </div>
      );
   }
}

export default Modal;