import { User } from "@models/type";
import dva from "@utils/dva";
//设置user
export const setUser = (user: User | null) => {
  const dispatch = dva.getDispatch();
  dispatch({
    type: "user/save",
    payload: {
      user: user,
    },
  });
  //const userState: UserModelState = dva.getStore().getState().user;
};
