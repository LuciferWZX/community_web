import { create } from "dva-core";
import { createLogger } from "redux-logger";
import createLoading from "dva-loading";
import historyNavigate from "@utils/historyNavigate";
let app: any;
let store: any;
let dispatch: any;
let registered: any;

function createApp(opt: any) {
  // redux 的日志
  opt.onAction = [createLogger()];
  opt.history = historyNavigate;
  app = create(opt);
  app.use(createLoading({}));
  if (!registered) {
    opt.models.forEach((model: any) => app.model(model));
  }
  registered = true;
  app.start();
  store = app._store;
  app.getStore = () => store;
  app.use({
    onError(err: any) {
      console.log(err);
    },
  });

  dispatch = store.dispatch;
  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  },
  getStore() {
    return app.getStore();
  },
};
