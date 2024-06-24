import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css"
import PropTypes from "prop-types";

class ImageGallery extends Component {
   static propTypes = {
      images: PropTypes.arrayOf(
         PropTypes.shape({
            id: PropTypes.number.isRequired
         }).isRequired
      )
   }

   render() {
      const { images } = this.props;
      return (
         <ul className={css.galleryList}>
            {
               images.map(image => (
                  <ImageGalleryItem
                     key={image.id}
                     image={image}
                  />
               ))
            }
         </ul>
      );
   }
}

export default ImageGallery;