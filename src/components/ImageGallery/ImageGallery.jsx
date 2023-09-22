import { Component } from "react";
import css from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

class ImageGallery extends Component {
  componentWillUnmount() {
    this.props.setDefaultAppState();
  }
  shouldComponentUpdate(nextProps) {
    if (
      JSON.stringify(nextProps.pictures) !== JSON.stringify(this.props.pictures)
    ) {
      console.log("update");
      return true;
    }
    return false;
  }

  render() {
    const { pictures } = this.props;
    // console.log("render");

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
  }
}
ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
};
export default ImageGallery;
