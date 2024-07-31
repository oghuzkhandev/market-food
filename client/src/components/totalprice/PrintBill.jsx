import React from "react";
import { Modal } from "antd";

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title="Fatura Bilgileri"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      onOk={() => setIsModalOpen(false)}
      footer={false}
      className="text-center"
      width={800}
    >
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto bg-white px-6">
          <article className="overflow-hidden">
            <div className="logo my-6">
                <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
            </div>
            <div className="bill-details">
                <div>
                    <div>
                        <p>Fatura Detayı:</p>
                        <p>Sanayi Caddesi Kazım Dirik Mah. 355/9 Sk </p>
                        <p>Özay Apt. Bornova - İzmir</p>
                    </div>
                </div>
            </div>
          </article>
        </div>
      </section>
    </Modal>
  );
};

export default PrintBill;
