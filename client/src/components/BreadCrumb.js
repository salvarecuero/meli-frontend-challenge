import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/BreadCrumb.scss";

function BreadCrumb({ categories, category_id }) {
  let [statedCategories, setStatedCategories] = useState(categories);

  useEffect(() => {
    if (!statedCategories?.length) {
      getCategories();
    }
  });

  async function getCategories() {
    return await fetch(`
    https://meli-frontend-challenge-server-salvarecuero.vercel.app/api/categories/${category_id}
    `)
      .then((response) => response.json())
      .then((data) => setStatedCategories(data));
  }

  if (statedCategories?.length) {
    return (
      <div className="breadcrumb-container">
        {statedCategories.map((category) => {
          return (
            <div key={category}>
              <Link
                className="breadcrumb-category"
                to="/"
                onClick={(e) => e.preventDefault()}
              >
                {category}
              </Link>{" "}
              {" > "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
export default BreadCrumb;
