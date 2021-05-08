import React from "react";
import "./styles/DetailedItem.scss";
import BreadCrumb from "./BreadCrumb";

function DetailedItem({ item }) {
  const conditions = {
    new: "Nuevo",
    used: "Usado",
    not_specified: "",
  };

  return (
    <>
      <BreadCrumb category_id={item.category_id} />
      <div className="detailed-item-container">
        <div className="detailed-item-picture-desc-column">
          <img
            className="detailed-item-picture"
            src={item.picture}
            alt={item.title}
          />
          <span className="detailed-item-desc-title">
            Descripción del producto
          </span>
          <span className="detailed-item-desc">{item.description}</span>
        </div>
        <div className="detailed-item-data-column">
          <span className="detailed-item-condition-sold">
            {item.condition ? conditions[item.condition] : ""} -{" "}
            {item.sold_quantity}{" "}
            {item.sold_quantity !== 1 ? "vendidos" : "vendido"}
          </span>
          <strong className="detailed-item-title">{item.title}</strong>
          <span className="detailed-item-price">
            $ {item.price.amount.toLocaleString()}
            <sup className="detailed-item-price-decimals">
              {item.price.decimals}
            </sup>
          </span>{" "}
          <button className="detailed-item-buy-button">Comprar</button>
        </div>
      </div>
    </>
  );
}

export default DetailedItem;
