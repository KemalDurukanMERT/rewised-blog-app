import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogDetail from "../components/BlogArea/BlogDetail";
import Navbar from "../components/Navbar/Navbar";
import Blogs from "../pages/Blogs";
import Dashboard from "../pages/Dashboard";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blogs" element={<PrivateRouter />}>
          <Route path="" element={<Blogs />} />
        </Route>
        <Route path="blogs/:id" element={<PrivateRouter/>}>
          <Route path="" element={<BlogDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
