import { useEffect } from "react";
import css from "./Modal.module.css";
import PropTypes from "prop-types";

const Modal = ({ largeImageURL, onClick }) => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClick();
    }
  };

  return (
    <div className={css.Overlay} onClick={onClick}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};
Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Modal;
