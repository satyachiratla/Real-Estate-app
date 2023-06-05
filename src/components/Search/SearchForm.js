import { useRef } from "react";
import classes from "./SearchForm.module.css";

const SearchForm = ({ onSearch }) => {
  const inputRef = useRef();

  const searchHandler = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    onSearch(value);
    inputRef.current.value = '';
  };

  return (
    <form onSubmit={searchHandler} className={classes.form}>
      <label id="house" htmlFor="house">
        Find Properties
      </label>
      <input ref={inputRef} type="text" placeholder="search by location" />
      <button type="submit">Find</button>
    </form>
  );
};

export default SearchForm;
