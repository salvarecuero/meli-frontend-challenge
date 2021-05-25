import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailedItem from "../components/DetailedItem";

function ItemDetails() {
  const [product, setProduct] = useState();
  let params = useParams();

  useEffect(() => {
    fetch(`
    https://meli-frontend-challenge-server-salvarecuero.vercel.app/api/items/${params.id}
    `)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [params.id]);

  if (product) {
    return <DetailedItem item={product} />;
  } else {
    return null;
  }
}

export default ItemDetails;
