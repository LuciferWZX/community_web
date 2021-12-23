import React, { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userSelector } from "@atoms/user.atom";
import { RequestCode, ResType, StoreKey } from "@utils/type";
import store from "storejs";
import { getUserInfo } from "../services/user";
import { User } from "@atoms/type";
import { useMount } from "ahooks";
// const history = createBrowserHistory();
const Layouts: FC = () => {
  const [user, setUser] = useRecoilState(userSelector);
  const navigate = useNavigate();

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
        setUser(res.data);
      }
    } else {
      navigate("/login");
      //history.push("/login");
    }
  };
  console.log(111, user);
  return (
    <div>
      layouts
      <Outlet />
    </div>
  );
};

export default Layouts;
function createBrowserHistory() {
  throw new Error("Function not implemented.");
}
