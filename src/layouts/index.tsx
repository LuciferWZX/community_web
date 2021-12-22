import {FC, useLayoutEffect} from "react";
import {Outlet} from "react-router-dom";
import {useMount} from "ahooks";
import {useRecoilValue} from "recoil";
import {userInfo} from "../atoms/user.atom";

const Layouts:FC = ({children}) => {
    const user = useRecoilValue(userInfo)
    console.log("user；",user)
  return(
      <div>
          layouts
          <Outlet/>
      </div>
  )
}

export default Layouts