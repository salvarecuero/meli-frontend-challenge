import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "./Logo";
import "./styles/SearchBar.scss";
import searchButton from "../assets/images/ic_Search.png";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();

  function submitSearch() {
    searchValue && history.push(`/items?search=${searchValue}`);
  }

  return (
    <div id="search-bar">
      <Logo />
      <input
        id="search-input"
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submitSearch()}
        placeholder="Nunca dejes de buscar"
      />
      <button id="search-button" onClick={submitSearch}>
        <img src={searchButton} alt="search button" />
      </button>
    </div>
  );
}

export default SearchBar;
