module.exports = (item, description) => {
  productData = {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: Math.floor(item.price),
      decimals: item.price % 1 ? (item.price % 1).toFixed(3) : "00",
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping ? item.shipping.free_shipping : null,
  };

  // If the item has description it means that the request has been made
  // specifically for this product, so we add the convenient data
  if (description) {
    productData.description = description.plain_text;
    productData.sold_quantity = item.sold_quantity;
    productData.category_id = item.category_id;
  }

  return productData;
};
