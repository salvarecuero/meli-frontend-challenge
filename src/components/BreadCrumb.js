import React from "react";
import { Link } from "react-router-dom";
import "./styles/BreadCrumb.scss";

function BreadCrumb({ categories }) {
  console.log(categories);
  if (categories.length) {
    return (
      <div className="breadcrumb-container">
        {categories.map((category) => {
          return (
            <>
              <Link
                className="breadcrumb-category"
                to="/"
                onClick={(e) => e.preventDefault()}
                key={category}
              >
                {category}
              </Link>{" "}
              {" > "}
            </>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
export default BreadCrumb;
