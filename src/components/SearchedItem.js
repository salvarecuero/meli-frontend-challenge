import React from "react";
import { Link } from "react-router-dom";
import "./styles/SearchedItem.scss";
import shippingIcon from "../assets/images/ic_shipping.png";

function SearchedItem({ item }) {
  return (
    <div className="item-container">
      <Link className="item-title" to={`/items/${item.id}`}>
        <img className="item-picture" src={item.picture} alt={item.title} />
      </Link>
      <div className="item-info">
        <div className="item-price-shipping-div">
          <span className="item-price">
            $ {item.price.amount.toLocaleString()}
          </span>
          {item.free_shipping ? (
            <img
              className="item-free-shipping"
              src={shippingIcon}
              title="Envío gratuito"
              alt="Envío gratuito"
            ></img>
          ) : null}
        </div>
        <Link className="item-title" to={`/items/${item.id}`}>
          {item.title}
        </Link>
      </div>
    </div>
  );
}

export default SearchedItem;
