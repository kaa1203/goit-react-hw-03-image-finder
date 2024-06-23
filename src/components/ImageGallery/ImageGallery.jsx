import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css"

class ImageGallery extends Component {
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