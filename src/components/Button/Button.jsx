import css from "./Button.module.css";
import PropTypes from "prop-types";
const Button = ({ onClick, isHidden }) => {
  const hiddenStyle = isHidden ? css["isHidden"] : "";
  return (
    <button
      className={`${css.Button} ${hiddenStyle}`}
      type="button"
      onClick={onClick}
    >
      Load more
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
};
export default Button;
