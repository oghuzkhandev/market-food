import React from "react";
import { Button } from "antd";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const TotalPrice = () => {
  return (
    <div className="total-price px-2 h-full flex flex-col sm:h-[80vh]">
      <h2 className="font-bold text-xl text-center underline underline-offset-[7px]">Sepetteki Ürünler</h2>
      <div className="cart-items">
        <div className="cart-item">
          <div className="py-3 flex items-center justify-between md:flex-row md:text-[15px] sm:flex-col text-[13px] sm:items-center">
            <img
              src="images/hamburger.png"
              className="h-[65px] w-[65px] object-cover"
              alt=""
            />
            <div className="cart-info flex flex-col px-2 ">
              <span className="font-mono ">Cheese Burger</span>
              <span className="font-mono text-center">200₺</span>
            </div>
            <div className="up-down">
              <MinusCircleOutlined className="text-md px-2 hover:text-red-600 cursor-pointer transition-all" />
              <span className="text-md">2</span>
              <PlusCircleOutlined className="text-md px-2 hover:text-green-600 cursor-pointer transition-all" />
            </div>
          </div>
        </div>
        
      </div>
      <div className="cart-total py-2 mt-auto">
        <div>
          <div className="border-t-2 border-b-2">
            <div className="flex justify-between py-2">
              <span>Ara Toplam</span>
              <span>400₺</span>
            </div>
            <div className="flex justify-between py-2">
              <span>KDV %8</span>
              <span className="text-red-600">32₺</span>
            </div>
          </div>
          <div className="flex justify-between items-center py-2 border-b-2">
            <span className="font-bold">Toplam Ücret</span>
            <span className="text-xl font-bold text-gray-600">432₺</span>
          </div>
        </div>
      </div>
      <div className="options flex flex-col gap-5">
        <Button className="text-white bg-blue-500 flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faCreditCard} className="text-white" />
          Sipariş Ver
        </Button>
        <Button
          icon={<ClearOutlined />}
          className="text-md text-white bg-red-600"
        >
          Siparişi Sil
        </Button>
      </div>
    </div>
  );
};

export default TotalPrice;
