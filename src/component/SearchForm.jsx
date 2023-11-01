import { useState } from "react";
import { useGlobalContext } from "../Context";

const SearchForm = () => {
  const { setSearchvalue } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    let searchVal = e.target.elements.search.value;
    if (!searchVal) return;
    setSearchvalue(searchVal);
  };

  return (
    <section>
      <div>
        <h3 className="title">unsplash images</h3>
      </div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input form-input"
          name="search"
          placeholder="cat"
          type="text"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
