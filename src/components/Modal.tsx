import React, { useState } from "react";
import { useUser } from "../context/UserContext";

type ModalProps = {
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [inputValue, setInputValue] = useState("");

  const { setUsername } = useUser();

  const handleSave = () => {
    setUsername(inputValue);
    onClose();
    setInputValue("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-10">
      <div className="bg-white p-6 rounded-lg w-80 shadow-lg">
        <h2 className="text-lg font-bold mb-4">Add User</h2>
        <input
          type="text"
          placeholder="Enter username"
          className="border w-full p-2 mb-4 rounded"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="bg-gray-300 px-3 py-1 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white px-3 py-1 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
