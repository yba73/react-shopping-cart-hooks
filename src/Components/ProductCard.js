import React from "react";

const ProductCard = (props) => {
  const { product, addToCart } = props;
  const onAddToCart = (productChosen) => {
    addToCart(productChosen);
  };
  return (
    <div className="col-lg-4 col-sm-6 card-product">
      <div className="product-card d-felx flex-column">
        <img className="product-card-img" src={product.image} alt="" />
        <p>{product.title}</p>
        <div className=" product-card-action">
          <p className="price">{product.price} $</p>
          <button className="add-btn" onClick={() => onAddToCart(product)}>
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
