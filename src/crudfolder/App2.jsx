import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUsers from "./CreateUsers";
import EditUsers from "./EditUsers";
import Navabar1 from "./Navabar1";
import Users from "./Users";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App2 = () => {
  return (
    <BrowserRouter>
      <Navabar1 />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="create-user" element={<CreateUsers />} />
        <Route path="edit-user/:id" element={<EditUsers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App2;
