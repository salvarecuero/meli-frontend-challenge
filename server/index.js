let express = require("express");
let cors = require("cors");
let app = express();
const port = 3500;
const handleItemPetition = require("./handlers/handleItemPetition");
const handleSearch = require("./handlers/handleSearch");
const handleBreadCrumb = require("./handlers/handleBreadCrumb");

app.use(cors({ origin: "*" }));

app.get("/api/items", handleSearch);

app.get("/api/items/:id", handleItemPetition);

app.get("/api/categories/:id", handleBreadCrumb);

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
