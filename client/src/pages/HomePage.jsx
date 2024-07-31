import React from "react";
import Header from "../components/header/Header";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import TotalPrice from "../components/totalprice/TotalPrice";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="home-page px-3 flex justify-between gap-5">
        <div className="categories flex-[1] overflow-auto border-r-2 px-2">
          <Categories />
        </div>
        <div className="products flex-[6] text-center">
          <Products />
        </div>
        <div className="total-prices flex-[1.4] border-l-2 max-h-[800px] border-b-2">
          <TotalPrice />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
