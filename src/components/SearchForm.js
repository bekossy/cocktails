import React from "react";

const SearchForm = ({ searchForm, setSearchForm }) => {
  return (
    <div className="form-container">
      <form className="form">
        <label htmlFor="search">Search Your Favorite Cocktail</label>
        <input
          type="text"
          name="search"
          id="search"
          value={searchForm}
          onChange={(e) => setSearchForm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchForm;
