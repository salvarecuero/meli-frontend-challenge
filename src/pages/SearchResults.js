import React, { useEffect, useState } from "react";
import qs from "qs";
import SearchedItem from "../components/SearchedItem";

function SearchResults({ location }) {
  const [searchedItemsData, setSearchedItemsData] = useState();

  useEffect(() => {
    fetch(
      `http://localhost:3500/api/items?q=${
        qs.parse(location.search)["?search"]
      }`
    )
      .then((response) => response.json())
      .then((data) => setSearchedItemsData(data.items));
  }, [location]);

  if (searchedItemsData) {
    return (
      <ul>
        {searchedItemsData.map((item) => (
          <li key={item.id}>
            <SearchedItem item={item} />
          </li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
}

export default SearchResults;
