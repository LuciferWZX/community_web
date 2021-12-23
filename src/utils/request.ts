import { extend, RequestOptionsInit, ResponseError } from "umi-request";
import { RequestCode } from "@utils/type";

interface IOption extends RequestOptionsInit {
  [key: string]: any;
}

const errorHandler = async (error: ResponseError): Promise<any> => {
  console.log("请求出错", { error });
  if (error.response) {
    console.log("后台拦截返回错误");
  }
  return {
    code: RequestCode.NoRes,
    data: null,
    msg: "",
  };
};
const server = extend({
  // 前缀, 一般用于覆盖统一设置的 prefix
  prefix: "",
  // 超时时长, 默认毫秒, 写操作慎用
  timeout: 5000,
  // fetch 请求包含 cookies 信息
  credentials: "omit",
  // 拦截错误
  errorHandler,
});
server.extendOptions({
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});
server.interceptors.request.use((url, options: IOption): any => {
  const token = "this is a token";
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (token === "") {
    return {
      url,
      options: {
        ...options,
      },
    };
  }
  return {
    url,
    options: {
      ...options,
      headers: {
        "access-token": token,
      },
    },
  };
});
server.interceptors.response.use(async (response, _options) => {
  // const data = await response.clone().json();
  // console.log(1234,data);
  return response;
});

export { server };
