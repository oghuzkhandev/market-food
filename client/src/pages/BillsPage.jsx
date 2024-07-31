import React, {useState} from "react";
import { Table, Tag, Button } from "antd";
import Header from "../components/header/Header";
import PrintBill from "../components/totalprice/PrintBill";

const BillsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    }
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  <Table columns={columns} dataSource={data} />;

  return (
    <>
      <Header />
      <h2 className="text-center text-3xl py-2 underline underline-offset-4">
        Faturalar
      </h2>
      <Table dataSource={data} columns={columns} className="px-5 rounded-md" />
      <div className="mt-5">
        <Button
          className="w-full font-bold text-white bg-cyan-500"
          onClick={() => setIsModalOpen(true)}
        >
          Siparişi Oluştur
        </Button>
      </div>
      <PrintBill setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </>
  );
};

export default BillsPage;
