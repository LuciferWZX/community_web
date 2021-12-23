import { atom, selector } from "recoil";
import { AtomKey, User } from "./type";

const user = atom<User | null>({
  key: AtomKey.user,
  default: null,
});
export const userSelector = selector<User | null>({
  key: "userSelector",
  get: ({ get }) => {
    return get(user);
  },
  set: ({ set }, newValue) => {
    set(user, newValue);
  },
});
