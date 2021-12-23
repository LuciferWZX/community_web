import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const UserLayout: FC = () => {
  return (
    <div>
      UserLayout
      <Outlet />
    </div>
  );
};
export default UserLayout;
