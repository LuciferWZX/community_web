import {atom} from "recoil";
import {AtomKey, User} from "./type";

export const userInfo = atom<User|null>({
    key:AtomKey.user,
    default:null
})