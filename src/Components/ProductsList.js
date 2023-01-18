import React, { Fragment } from "react";
import ProductCard from "./ProductCard";

const ProductsList = (props) => {
  const { products, size, addToCart } = props;
  // MTH 1
  // let filterArray = [...products];
  // if (size.trim() === "") {
  // } else {
  //   filterArray = products.filter(
  //     (product) => product.availableSizes.indexOf(size) >= 0
  //   );
  // }

  //MTH 2
  //let filterArray = [...products];
  // if (size.trim() === "") {
  // } else {
  //    filterted = products.filter(
  //   (prodocut) =>
  //     prodocut.availableSizes.findIndex((product) => product === size) >= 0
  // );
  // }

  return (
    <Fragment>
      <div className="products">
        <div className="col-8 d-flex flex-wrap ">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsList;
