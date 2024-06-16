import React, { useState } from "react";
import { Modal, FloatButton } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Switch } from "antd";

const Info = () => {
  const [onTurn, setOnTurn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="default"
        onClick={showModal}
        // style={{ right: 94 }}
      />

      <Modal
        title="How can you use it"
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <p>
          {" "}
          If you want to add your task, you can type your task and press "Enter"
          on your keybord
        </p>
        <p> Or you can turn on the feature with button "Add"</p>
        <p> We recommend you work with "Enter", because it's easy</p>
        <p>
          <Switch defaultChecked checked={() => {}} />
          turn on feature
        </p>
      </Modal>
    </>
  );
};

export default Info;
