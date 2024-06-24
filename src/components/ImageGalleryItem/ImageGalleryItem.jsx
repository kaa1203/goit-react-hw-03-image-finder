import { Component } from "react";
import css from "./ImageGalleryItem.module.css"
import Modal from "components/Modal/Modal";
import PropTypes from "prop-types";

class ImageGalleryItem extends Component {
   static propTypes = {
      image: PropTypes.shape({
         webformatURL: PropTypes.string.isRequired,
         largeImageURL: PropTypes.string.isRequired, 
      }).isRequired
   }

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