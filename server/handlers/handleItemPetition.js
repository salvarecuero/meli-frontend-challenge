const fetch = require("node-fetch");
const parseProductData = require("../parsers/parseProductData");

module.exports = async (req, res) => {
  let parsedData;
  const itemID = req.params.id;

  let itemData = fetch(`https://api.mercadolibre.com/items/${itemID}`)
    .then((response) => response.json())
    .then((data) => (itemData = data));
  let itemDescription = fetch(
    `https://api.mercadolibre.com/items/${itemID}/description`
  )
    .then((response) => response.json())
    .then((data) => (itemDescription = data));

  await Promise.all([itemData, itemDescription]).then(
    () => (parsedData = parseProductData(itemData, itemDescription))
  );

  res.send(parsedData);
  console.log(`A consult to an item was made... (Item ID: ${itemID})`);
};
