import { useState } from "react";
import css from "./ImageGalleryItem.module.css";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
  const [modalIsVisible, setmodalIsVisible] = useState(true);

  const openModal = () => {
    setmodalIsVisible(false);
  };

  const closeModal = () => {
    setmodalIsVisible(true);
  };

  return (
    <>
      {!modalIsVisible && (
        <Modal largeImageURL={largeImageURL} onClick={closeModal} />
      )}
      <li key={id} className={css.ImageGalleryItem} onClick={openModal}>
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
};
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
