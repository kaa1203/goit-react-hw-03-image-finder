import { Component } from "react";
import css from "./ImageGalleryItem.module.css"
import Modal from "components/Modal/Modal";

class ImageGalleryItem extends Component {
   state = {
      isOpen: false,
   }
   
   openModal = () => {
      this.setState(prevState => ({
         isOpen: !prevState.isOpen
      }));
   }

   closeModal = () => {
      this.setState({
         isOpen: false
      });
   }

   render() {
      const { webformatURL, largeImageURL } = this.props.image;
      return (
         <li className={css.galleryItem} onClick={this.openModal}>
            <img src={webformatURL} alt="Search" className={css.galleryImage} loading="lazy  " />
            {this.state.isOpen && (
               <Modal 
                  closeModal={this.closeModal}
                  largeImageURL={largeImageURL}
               />
            )}
         </li>
      );
   }
}

export default ImageGalleryItem;