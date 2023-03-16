import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/homePage";
import Login from "../pages/login";
import Register from "../pages/signup/signup";
import Watch from "../pages/Watch/Watch";
import Moviedetails from './../components/Details/Moviedetails';

const ProtectedRoute = () => {
  return (
    <Routes>
      <Route path="/home" element={<Homepage />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/:id" element={<Moviedetails />} />
      <Route path="/watch" element={<Watch />} />
    </Routes>
  );
};

export default ProtectedRoute;

export const UnprotectedRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/sign-in" element={<Login />} />
    </Routes>
  );
};
