import React, { useEffect, useState } from "react";
import qs from "qs";
import BreadCrumb from "../components/BreadCrumb";
import SearchedItem from "../components/SearchedItem";
import "./styles/SearchResults.scss";

function SearchResults({ location }) {
  const [searchedItems, setSearchedItems] = useState();
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    fetch(
      `https://meli-frontend-challenge-server-salvarecuero.vercel.app/api/items?q=${
        qs.parse(location.search)["?search"]
      }`
    )
      .then((response) => response.json())
      .then((data) => setSearchedItems(data))
      .then(() => setFetched(true));
  }, [location]);

  if (searchedItems?.items?.length) {
    return (
      <>
        <BreadCrumb categories={searchedItems.categories} />
        <div id="search-results-container">
          {searchedItems.items.map((item) => (
            <SearchedItem key={item.id} item={item} />
          ))}
        </div>
      </>
    );
  } else if (fetched) {
    return <div id="error-msg">No se han encontrado resultados...</div>;
  } else return null;
}

export default SearchResults;
