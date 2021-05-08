const fetch = require("node-fetch");

module.exports = async (req, res) => {
  let categories;
  const category_id = req.params.id;
  await fetch(`https://api.mercadolibre.com/categories/${category_id}`)
    .then((response) => response.json())
    .then(
      (data) =>
        (categories = data.path_from_root?.map((category) => category.name))
    );

  res.send(categories);

  console.log(`A category tree was requested... (Category ID: ${category_id})`);
};
