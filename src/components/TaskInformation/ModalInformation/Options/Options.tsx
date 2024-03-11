import { useState } from "react";
import Modal from "./Modal/Modal";
import Icon from "../../../ui/Icon";
const Options = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };
  return (
    <>
      <div className="flex p-5 pe-10 justify-between">
        <div className="flex items-center">
          <span className="me-2">اشتراک گذاری</span>
          <button
            type="button"
            className="bg-transparent text-gray-400 hover:text-gray-600 focus:outline-none"
            onClick={openModal}
          >
            <Icon iconName="Share" />
          </button>
        </div>
        <div className="flex items-center gap-s">
          <div className="inline-flex items-center relative">
            <div className="w-[34px] h-[34px] rounded-full flex justify-center items-center border-[1px] border-dashed border-red-500">
              <Icon iconName="DashedFlag" className="text-red-500 text-[20px]" />
            </div>
          </div>
          <div className="flex">
            <div className="inline-flex items-center relative">
              <div className="w-[34px] h-[34px] rounded-full flex justify-center items-center border-[1px] border-dashed border-gray-400">
                <Icon iconName="AddUser" className="text-gray-400 text-[20px]" />
              </div>
              <img
                src="../../../assets/images/profile.png"
                className="w-[37px] h-[36px] rounded-full -ms-2 z-50"
                alt="User-Profile"
              />
              <Icon iconName="User" />
            </div>
          </div>
          <button className="bg-red-500 hover:bg-red-600 border rounded-md h-[30px] w-[111px] text-white text-xs">
            Open
          </button>
        </div>
      </div>
      {isOpenModal && (
        <div className="fixed flex items-center justify-center bg-black bg-opacity-60 z-50 top-0 left-0 w-[100vw] h-[100vh]">
          <div className="relative">
            <Modal
              onClose={() => {
                setIsOpenModal(false);
              }}
            />
            <span className="absolute top-36 right-4 mt-[-130px]"></span>
          </div>
        </div>
      )}
    </>
  );
};

export default Options;