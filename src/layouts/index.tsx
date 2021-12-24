import React, { FC } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { RequestCode, ResType, StoreKey } from "@utils/type";
import store from "storejs";
import { getUserInfo } from "../services/user";
import { User } from "@models/type";
import { useMount } from "ahooks";
import { useSelector } from "react-redux";
import { setUser } from "@utils/storeKid";
import historyNavigate from "@utils/historyNavigate";

const Layouts: FC = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  console.log("当前用户:", user);
  useMount(async () => {
    console.log("验证用户...");
    await verifyUser();
  });
  const verifyUser = async (): Promise<void> => {
    //先查询本地是否有token
    const token: string | undefined = store.get(StoreKey.Token);
    //有token去获取用户详情
    if (token) {
      const res: ResType<User> = await getUserInfo();
      if (res.code === RequestCode.Ok) {
        console.log(res);
        setUser(res.data);
      }
    } else {
      //navigate("login");
      historyNavigate.replace("login");
      //historyNavigate.go(0);
    }
  };

  return (
    <div>
      layouts
      <Outlet />
    </div>
  );
};

export default Layouts;
