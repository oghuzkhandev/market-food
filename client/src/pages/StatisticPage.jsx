import React from "react";
import Header from "../components/header/Header";

const StatisticPage = () => {
  return (
    <>
      <Header />
      <div className="px-6">
        <h2 className="text-center text-4xl py-2 underline underline-offset-4">
          İstatistiklerim
        </h2>
        <div className="container">
          <h2 className="text-[25px]">
            Hoşgeldin{" "}
            <span className="text-green-700 font-bold text-[20px]">Admin</span>
          </h2>
        </div>
        <div className="statistic-cards grid md:grid-cols-2 xl:grid-cols-4 my-10 xl:gap-10 md:gap-8 gap-3">
          <div className="statistic-card bg-gray-800 rounded-lg h-[120px] p-8">
            <div className="flex justify-around">
              <div className="rounded-full bg-white h-[60px] w-[60px] p-3">
                <img src="images/user.png" alt="" />
              </div>
              <div className="text-white font-semibold text-[18px] flex flex-col items-center">
                <span className="pb-3">Toplam Müşteri</span>
                <span>36</span>
              </div>
            </div>
          </div>
          <div className="statistic-card bg-gray-800 rounded-lg h-[120px] p-8">
            <div className="flex justify-around">
              <div className="rounded-full bg-white h-[60px] w-[60px] p-3">
                <img src="images/money.png" alt="" />
              </div>
              <div className="text-white font-semibold text-[18px] flex flex-col items-center">
                <span className="pb-3">Toplam Kazanç</span>
                <span>53.585₺</span>
              </div>
            </div>
          </div>
          <div className="statistic-card bg-gray-800 rounded-lg h-[120px] p-8">
            <div className="flex justify-around">
              <div className="rounded-full bg-white h-[60px] w-[60px] p-3">
                <img src="images/sale.png" alt="" />
              </div>
              <div className="text-white font-semibold text-[18px] flex flex-col items-center">
                <span className="pb-3">Toplam Satış</span>
                <span>52</span>
              </div>
            </div>
          </div>
          <div className="statistic-card bg-gray-800 rounded-lg h-[120px] p-8">
            <div className="flex justify-around">
              <div className="rounded-full bg-white h-[60px] w-[60px] p-3">
                <img src="images/product.png" alt="" />
              </div>
              <div className="text-white font-semibold text-[18px] flex flex-col items-center">
                <span className="pb-3">Toplam Ürün</span>
                <span>186</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
