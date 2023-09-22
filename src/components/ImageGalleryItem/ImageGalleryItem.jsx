import { Component } from "react";
import css from "./ImageGalleryItem.module.css";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
class ImageGalleryItem extends Component {
  state = { modalIsVisible: true };

  openModal = () => {
    console.log("click Foto");
    this.setState({ modalIsVisible: false });
  };

  closeModal = () => {
    console.log("click Background ");
    this.setState({ modalIsVisible: true });
  };

  render() {
    const { modalIsVisible } = this.state;
    const { id, webformatURL, largeImageURL } = this.props;
    return (
      <>
        {!modalIsVisible && (
          <Modal largeImageURL={largeImageURL} onClick={this.closeModal} />
        )}
        <li key={id} className={css.ImageGalleryItem} onClick={this.openModal}>
          {" "}
          <img
            src={webformatURL}
            alt=""
            className={css.ImageGalleryItem_image}
            loading="lazy"
          />
        </li>
      </>
    );
  }
}
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
