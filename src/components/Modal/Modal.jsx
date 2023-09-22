import { Component } from "react";
import css from "./Modal.module.css";
import PropTypes from "prop-types";
class Modal extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === "Escape") {
      this.props.onClick();
    }
  };
  render() {
    const { largeImageURL, onClick } = this.props;
    return (
      <div className={css.Overlay} onClick={onClick}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Modal;
