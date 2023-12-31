import css from "./Searchbar.module.css";
import PropTypes from "prop-types";
const Searchbar = ({ onSubmit }) => {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onSubmit}>
        <button className={css.SearchForm_button} type="submit">
          <span className={css.SearchForm_button_label}></span>
        </button>
        <input
          name="searchValue"
          type="text"
          className={css.SearchForm_input}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
export default Searchbar;
