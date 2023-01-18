import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import data from "./data.json";
import ProductsList from "./Components/ProductsList";
import Filter from "./Filter";
import Header from "./Components/Header";
import BasketList from "./Components/BasketList";

function App() {
  // state of products
  const [products, setProducts] = useState(data.products);

  // state size to set saze from selecte
  const [size, setSize] = useState("");

  // state sort to set sort from selecte
  const [sort, setSort] = useState("");

  // state toogleCart to show and hide cart notfication
  const [toogleCart, setToogleCart] = useState(false);

  // state of cartList
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("cartList")) ?? []
  );

  // useEffect update cartList in the storage
  useEffect(() => {
    setCartToLocalStorage(cartList);
  }, [cartList]);

  /* ===== getSort ===== */
  const getSort = (sortChosen) => {
    // selecte value and seted to sort state for send to filter components
    setSort(sortChosen);
    // check if selecte value is lowest
    if (sortChosen === "lowest") {
      setProducts(data.products.slice().sort((a, b) => a.price - b.price)); // and sort the product by price (slice comme [...data.products]) because sort function is change the mane array (state for react)
      // check if selecte value is highest
    } else if (sortChosen === "highest") {
      setProducts(data.products.slice().sort((a, b) => b.price - a.price));
    } else {
      // else the last value value of selecte lastes (sort products by id)

      setProducts(
        data.products.slice().sort((a, b) => (a._id - a._id > 0 ? 1 : -1))
      );
    }
  };

  /* =====// getSort //===== */

  /* ===== getSize ===== */
  const getSize = (sizeChosen) => {
    if (sizeChosen === "") {
      setProducts(products);
    } else {
      // get size chosen from selecte and set to state size and sendted to filter component for change UI selecet
      setSize(sizeChosen);
      setProducts(
        data.products.filter(
          (product) => product.availableSizes.indexOf(sizeChosen) >= 0 // check the size chosen is in availableSizes
        )
      );
    }
  };
  /* =====// getSize //===== */

  /* ===== addToCart ===== */
  const addToCart = (chosenProduct) => {
    const exist = cartList.find((product) => product._id === chosenProduct._id); // check is chosen product on cartList or not
    if (exist) {
      setCartList(cartList);
    } else {
      setCartList([...cartList, chosenProduct]); // if not push chosen product in the cart
    }
  };
  /* =====// addToCart //===== */

  /* ===== plusQuantit ===== */
  function plusQunatity(itemChosen) {
    setCartList(
      cartList.map((item) =>
        item._id === itemChosen._id
          ? { ...itemChosen, quantity: itemChosen.quantity + 1 } // update the quantity
          : item
      )
    );
  }
  /* =====// plusQuantit //===== */

  /* ===== muinsQuantity ===== */
  function muinsQuantity(itemChosen) {
    if (itemChosen.quantity > 1) {
      setCartList(
        cartList.map((item) =>
          item._id === itemChosen._id
            ? { ...itemChosen, quantity: itemChosen.quantity - 1 }
            : item
        )
      );
    }
  }
  /* =====// muinsQuantity //===== */

  /* ===== removeItem ===== */

  function removeItem(itemChosen) {
    setCartList(cartList.filter((item) => item._id !== itemChosen._id)); // remove itemChosen by id
  }
  /* =====// removeItem //===== */

  /* ===== removeItem ===== */

  function removeAllCart() {
    setCartList([]); // remove all items from cart
  }
  /* =====// removeItem //===== */

  /* ===== set CartList To LocalStorage ===== */
  function setCartToLocalStorage(cartList) {
    localStorage.setItem("cartList", JSON.stringify(cartList)); // set cartList in localStorage
  }
  /* =====// set CartList To LocalStorage //===== */

  /* ===== set CartList To LocalStorage ===== */
  function getToggle(toogle) {
    setToogleCart(toogle); // get toogle from header components
  }
  /* =====// set CartList To LocalStorage //===== */

  /* ===== Alert ===== */

  /* =====// Alert //===== */

  return (
    <div>
      <Header cartList={cartList} getToggle={getToggle} />
      <div className="container">
        <div className="row">
          <div className="container-all">
            <Filter
              count={products.length}
              size={size}
              sort={sort}
              getSort={getSort}
              getSize={getSize}
            />
            <ProductsList
              products={products}
              size={size}
              sort={sort}
              addToCart={addToCart}
            />
            <BasketList
              cartList={cartList}
              plusQunatity={plusQunatity}
              muinsQuantity={muinsQuantity}
              removeItem={removeItem}
              removeAllCart={removeAllCart}
              toogleCart={toogleCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
