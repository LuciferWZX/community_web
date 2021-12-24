import { Reducer } from "React";
import { User } from "@models/type";

export interface UserModelState {
  user: User | null;
}
export interface UserModelType {
  namespace: "user";
  state: UserModelState;
  // effects: {};
  reducers: {
    save: Reducer<UserModelState, any>;
  };
}
const initState: UserModelState = {
  user: null,
};
const userModel: UserModelType = {
  namespace: "user",
  state: initState,
  reducers: {
    save(state: UserModelState, { payload }: any) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
export default userModel;
