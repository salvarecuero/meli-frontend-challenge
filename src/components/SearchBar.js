import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "./Logo";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();

  function submitSearch() {
    searchValue && history.push(`/items?search=${searchValue}`);
  }

  return (
    <div>
      <Logo />
      <input
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Nunca dejes de buscar"
      />
      <button onClick={submitSearch}>Buscar</button>
    </div>
  );
}

export default SearchBar;
