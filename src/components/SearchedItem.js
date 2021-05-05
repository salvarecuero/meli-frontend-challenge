import React from "react";
import { Link } from "react-router-dom";

function SearchedItem({ item }) {
  return (
    <>
      <img src={item.picture} alt={item.title} />
      <Link to={`/items/${item.id}`}>
        <strong>{item.title}</strong>
      </Link>
      <span>${item.price.amount}</span>
      <span>{item.free_shipping ? "Envío gratuito" : ""}</span>
    </>
  );
}

export default SearchedItem;
