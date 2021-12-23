import React, { FC } from "react";
import "@pages/home";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "@pages/home";
import Layouts from "@layouts/index";
import NoMatch from "@pages/noMatch";
import MainLayout from "@layouts/MainLayout";
import Message from "@pages/message";
import UserLayout from "@layouts/UserLayout";
import Login from "@pages/user/login";
const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layouts />}>
          <Route path={"/"} element={<MainLayout />}>
            <Route index element={<Navigate to={"/home"} />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/message"} element={<Message />} />
          </Route>
          <Route element={<UserLayout />}>
            <Route path={"/login"} element={<Login />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
