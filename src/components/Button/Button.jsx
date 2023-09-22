import { Component } from "react";
import css from "./Button.module.css";
import PropTypes from "prop-types";
class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button className={css.Button} type="button" onClick={onClick}>
        Loar more
      </button>
    );
  }
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
