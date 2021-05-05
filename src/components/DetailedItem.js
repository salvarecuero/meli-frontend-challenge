import React from "react";

function DetailedItem({ item }) {
  return (
    <>
      <img src={item.picture} alt={item.title} />
      <strong>{item.title}</strong>
      <span>${item.price.amount}</span>
      <span>{item.free_shipping ? "Envío gratuito" : ""}</span>
      <h3>Descripción del producto</h3>
      <span>{item.description}</span>
    </>
  );
}

export default DetailedItem;
