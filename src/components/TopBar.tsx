import React from "react";
import { useUser } from "../context/UserContext";

type TopBarProps = {
  onAddUser: () => void;
};

const TopBar: React.FC<TopBarProps> = ({ onAddUser }) => {
  const { username, logout } = useUser();

  return (
    <div
      className={`w-full flex items-center ${
        username ? "justify-between" : "justify-end"
      } px-4 py-4 fixed top-0 left-0 bg-white shadow z-10`}
    >
      {username && (
        <h1 className="text-xl font-semibold">Welcome, {username}</h1>
      )}
      {!username ? (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={onAddUser}
        >
          Add User
        </button>
      ) : (
        <button
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={logout}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default TopBar;
