const fetch = require("node-fetch");
const parseSearchData = require("../parsers/parseSearchData");

module.exports = async (req, res) => {
  let parsedData;
  const searchQuery = req.query.q;

  await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`)
    .then((response) => response.json())
    .then((data) => (parsedData = parseSearchData(data)));
  res.send(parsedData);

  console.log(`A search was made... (Search query: ${searchQuery})`);
};
