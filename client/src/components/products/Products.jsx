import React from "react";

const Products = () => {
  return (
    <div className="products-container ml-7 mr-7">
      <div className="py-1">
        <span className="text-2xl font-bold">Ürünler</span>
      </div>
      <div className="product-cards grid md:grid-cols-2 xl:grid-cols-4 py-10 select-none cursor-pointer sm:grid-cols-1">
        <div className="product-card flex flex-col items-center justify-between border rounded-xl  hover:shadow-xl">
          <img
            src="https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg"
            alt=""
            className="h-[255px] w-full rounded-xl object-cover"
          />
          <span>Lahmacun</span>
          <span>80₺</span>
        </div>
        <div className="product-card flex flex-col items-center justify-between border rounded-xl   hover:shadow-xl">
          <img
            src="https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/9247/uploads/urunresimleri/buyuk/hamburger-180c.jpg"
            alt=""
            className="h-[255px] w-full rounded-xl object-cover"
          />
          <span>Hamburger</span>
          <span>200₺</span>
        </div>
        <div className="product-card flex flex-col items-center justify-between border rounded-xl  hover:shadow-xl">
          <img
            src="https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/ev-usulu-pizza-yemekcom.jpg"
            alt=""
            className="h-[255px] w-full rounded-xl object-cover"
          />
          <span>Pizza</span>
          <span>240₺</span>
        </div>
        <div className="product-card flex flex-col items-center justify-between border rounded-xl   hover:shadow-xl">
          <img
            src="https://i.ytimg.com/vi/D6tVFbpIQlc/maxresdefault.jpg"
            alt=""
            className="h-[255px] w-full rounded-xl object-cover"
          />
          <span>İskender</span>
          <span>250₺</span>
        </div>
      </div>
    </div>
  );
};

export default Products;
