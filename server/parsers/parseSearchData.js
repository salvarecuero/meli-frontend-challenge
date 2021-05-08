const parseProductData = require("./parseProductData");

module.exports = (data) => {
  const parsedSearchData = {
    author: {
      name: "Salvador",
      lastname: "Recuero",
    },
    categories:
      data.filters
        .find((filter) => filter.id === "category")
        ?.values[0].path_from_root?.map((categories) => categories.name) ?? [],
    items: data.results.slice(0, 4).map((item) => parseProductData(item)),
  };

  return parsedSearchData;
};
