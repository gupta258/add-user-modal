import React, { useState } from "react";
import Modal from "./components/Modal";
import TopBar from "./components/TopBar";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-20 px-4 relative">
      <TopBar onAddUser={() => setShowModal(true)} />
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default App;
