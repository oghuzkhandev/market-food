import React from "react";
import { Modal, Card, Button, Form, Input, Select } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log("Başarılı:", values);
  };

  return (
    <>
      <Modal
        title="Bilgilerinizi Giriniz."
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => setIsModalOpen(false)}
        footer={false}
        className="text-center"
      >
        <Form layout={"vertical"} onFinish={onFinish}>
          <Form.Item
            label="Adres Bilgisi"
            name="Adres"
            rules={[
              {
                required: true,
                message: "Adresi Boş Bırakamazsınız!",
              },
            ]}
          >
            <Input placeholder="Adresinizi Giriniz." />
          </Form.Item>
          <Form.Item
            label="Telefon Numarası"
            name="Tel"
            rules={[
              {
                required: true,
                message: "Telefon Numarasını Boş Bırakamazsınız!",
              },
            ]}
          >
            <Input placeholder="Telefon Numaranızı Giriniz." maxLength={11} />
          </Form.Item>
          <Form.Item
            label="Ödeme Yöntemi"
            rules={[
              {
                required: true,
                message: " Lütfen Ödeme Yöntemini Belirtiniz.",
              },
            ]}
          >
            <Select placeholder="Nakit" className="text-left">
              <Select.Option value="Nakit">Nakit</Select.Option>
              <Select.Option value="Kredi">Kredi Kartı</Select.Option>
            </Select>
          </Form.Item>
          <Card
            title="Sepetteki Ürünlerin Fiyatı"
            className="w-full shadow-lg text-center "
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
              <Button
                className="w-full font-bold text-white bg-cyan-500"
                onClick={() => setIsModalOpen(true)}
              >
                Siparişi Oluştur
              </Button>
            </div>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default CreateBill;
