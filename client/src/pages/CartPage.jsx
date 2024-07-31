import React, {useState} from "react";
import { Table, Card, Button} from "antd";
import Header from "../components/header/Header";
import CreateBill from "../components/totalprice/CreateBill";

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <>
      <Header />
      <Table dataSource={dataSource} columns={columns} className="px-5" />
      <div className="total-price flex justify-end px-5">
        <Card
          title="Sepetteki Ürünlerin Fiyatı"
          className="w-[300px] shadow-lg text-center"
        >
          <div className="flex justify-between items-center">
            <p>Ara Toplam</p>
            <p>500₺</p>
          </div>
          <div className="flex justify-between items-center py-2">
            <p>KDV %8</p>
            <p className="text-red-500">+80₺</p>
          </div>
          <div className="flex justify-between items-center font-bold border-b-2 border-cyan-400">
            <p>Toplam Fiyat</p>
            <p>580₺</p>
          </div>
          <div className="mt-5">
            <Button className="w-full font-bold text-white bg-cyan-500" onClick={() => setIsModalOpen(true)}>
              Siparişi Oluştur
            </Button>
          </div>
        </Card>
      </div>
      <CreateBill setIsModalOpen={setIsModalOpen} isModalOpen = {isModalOpen} />
    </>
  );
};

export default CartPage;
