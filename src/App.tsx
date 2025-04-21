import { useState } from "react";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const handleSave = (): void => {
    setUsername(inputValue);
    setShowModal(false);
    setInputValue("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 relative">
      <div className="w-full flex justify-between items-center mb-8">
        {username && (
          <h1 className="text-xl font-semibold">Welcome, {username}</h1>
        )}
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setShowModal(true)}
        >
          Add User
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-10">
          <div className="bg-white p-6 rounded-lg w-80 shadow-lg">
            <h2 className="text-lg font-bold mb-4">Add User</h2>
            <input
              type="text"
              placeholder="Enter username"
              className="border w-full p-2 mb-4 rounded"
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
            />
            <div className="flex justify-end">
              <button
                className="bg-gray-300 px-3 py-1 rounded mr-2"
                onClick={() => setShowModal(false)}
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
      )}
    </div>
  );
};

export default App;
