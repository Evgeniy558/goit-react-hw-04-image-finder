import css from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ pictures }) => {
  return (
    <>
      <ul className={css.ImageGallery}>
        {pictures.map((picture) => {
          return (
            <ImageGalleryItem
              key={picture.id}
              id={picture.id}
              webformatURL={picture.webformatURL}
              largeImageURL={picture.largeImageURL}
            />
          );
        })}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
};
export default ImageGallery;
