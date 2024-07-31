import React from "react";
import { Table } from "antd";
import Header from "../components/header/Header";

const UserPage = () => {
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
    }
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
  ];

  return (
    <>
      <Header />
      <h2 className="text-center text-3xl py-2 underline underline-offset-4">
        Müşteriler
      </h2>
      <Table dataSource={data} columns={columns} className="px-5 rounded-md" />
      <div className="mt-5"></div>
    </>
  );
};

export default UserPage;
