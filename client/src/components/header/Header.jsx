import React from "react";
import { Input, Badge} from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";


const Header = () => {
  const { Search } = Input;
  return (
    <div className="border-b mb-6">
      <header className="p-2 flex justify-between items-center">
        <div className="logo px-3">
          <a href="/">
            <img className="md:h-[100px] h-[50px] " src="images/yemeksepeti.jpg" alt="" />
          </a>
        </div>
        <div className="header-search flex-1">
          <Search
            placeholder="Ürün Adı Giriniz."
            enterButton="Search"
            size="large"
            className="w-4/5"
          />
        </div>
        <div className="menu-links flex justify-between items-center xl:gap-5 md-gap-3 xl:static sm:fixed bottom-0">
          <a href={"/"}>
            <HomeOutlined className="text-xl mr-1" />
            <span className="text-[15px] px-2 text-gray-500 font-semibold hover:text-rose-700 hover:bg-gray-200 hover:p-2 hover:rounded-[5px] transition-all">
              Ana Sayfa
            </span>
          </a>
          <a href={"sepet"}>
            <Badge count={5} offset={[0,2]}>
              <ShoppingCartOutlined className="text-xl mr-1" />
              <span className="text-[15px] px-2 text-gray-500 font-semibold hover:text-rose-700  hover:bg-gray-200 hover: p-1 hover:rounded-[5px] transition-all">
                Sepetim
              </span>
            </Badge>
          </a>
          <a href={"faturalar"}>
            <CopyOutlined className="text-xl mr-1" />
            <span className="text-[15px] px-2 text-gray-500 font-semibold hover:text-rose-700  hover:bg-gray-200 hover: p-1 hover:rounded-[5px] transition-all">
              Faturalar
            </span>
          </a>
          <a href={"musteriler"}>
            <UserOutlined className="text-xl mr-1" />
            <span className="text-[15px] px-2 text-gray-500 font-semibold hover:text-rose-700  hover:bg-gray-200 hover: p-1 hover:rounded-[5px] transition-all">
              Müsteriler
            </span>
          </a>
          <a href={"istatistikler"}>
            <BarChartOutlined className="text-xl mr-1" />
            <span className="text-[15px] px-2 text-gray-500 font-semibold hover:text-rose-700  hover:bg-gray-200 hover: p-1 hover:rounded-[5px] transition-all">
              Istatistikler
            </span>
          </a>
          <a href={"cikis"}>
            <LogoutOutlined className="text-xl mr-1" />
            <span className="text-[15px] px-2 text-gray-500 font-semibold hover:text-rose-700  hover:bg-gray-200 hover: p-1 hover:rounded-[5px] transition-all">
              Cıkıs Yap
            </span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
