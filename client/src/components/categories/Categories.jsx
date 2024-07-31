import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Modal, Form, Button, Input } from "antd";

const Categories = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <ul className="flex items-center flex-col gap-4 overflow-y-auto scroll-smooth h-[100vh] sm:h-[80vh]">
      <li className="cursor-pointer flex gap-1 items-center text-xl">
        <FontAwesomeIcon icon={faList} className="text-black" />
        <span className="text-2xl mt-1">Kategoriler</span>
      </li>
      <li className="cursor-pointer py-3 px-1 text-black text-center border-b-2 hover:shadow-xl">
        <span className="text-[20px]">Yiyecekler</span>
        <img
          className="h-[150px] w-[200px] object-cover rounded-2xl"
          src="images/hamburger.png"
          alt=""
        />
      </li>
      <li className="cursor-pointer py-3 px-1 text-black text-center border-b-2 hover:shadow-xl">
        <span className="text-[20px]">İçecekler</span>
        <img
          className="h-[150px] w-[200px] object-cover rounded-2xl"
          src="images/cola.png"
          alt=""
        />
      </li>
      <li className="cursor-pointer py-3 px-1 text-black text-center border-b-2 hover:shadow-xl">
        <span className="text-[20px]">Meyveler</span>
        <img
          className="h-[150px] w-[200px] object-cover rounded-2xl"
          src="images/fruits.png"
          alt=""
        />
      </li>
      <li className="cursor-pointer py-3 px-1 text-black text-center border-b-2 hover:shadow-xl">
        <span className="text-[20px]">Sebzeler</span>
        <img
          className="h-[150px] w-[200px] object-cover rounded-2xl"
          src="images/vegetables.jpg"
          alt=""
        />
      </li>
      <li
        className="cursor-pointer py-5 px-1 text-center border-b-2transition-all"
        onClick={() => setIsAddModalOpen(true)}
      >
        <span className="text-[20px]">Kategori Ekleme</span>
        <img
          className="h-[150px] w-[200px] object-cover rounded-2xl"
          src="images/ProductAdd.png"
          alt=""
        />
        <Modal
          className="text-center"
          title="Yeni Kategori Ekle "
          open={isAddModalOpen}
          onCancel={() => setIsAddModalOpen(false)}
          onOk={() => setIsAddModalOpen(false)}
          footer={false}
        >
          <Form layout="vertical">
            <Form.Item className="text-left" name={Categories} label="Kategori Ekle" rules={[{ required: true, message: "Kategori Alanı Boş Bırakılamaz" }]}>
              <Input></Input>
            </Form.Item>
            <Form.Item className="flex justify-end">
              <Button type="primary" danger htmlType="submit">
                Oluştur
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </li>
    </ul>
  );
};

export default Categories;
