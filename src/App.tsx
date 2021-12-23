import React, { FC } from "react";
import "@pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/home";
import Layouts from "@layouts/index";
import NoMatch from "@pages/noMatch";

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
