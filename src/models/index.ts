import user, { UserModelState } from "@models/user";

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    layout?: boolean;
    user?: boolean;
    process?: boolean;
    cache?: boolean;
    task?: boolean;
    record?: boolean;
  };
}

export interface ConnectState {
  loading: Loading;
  user: UserModelState;
  // process: ProcessModelState;
  // cache: CacheModelState;
  // task: ITaskModelState;
  // record: RecordModelState;
}

declare module "react-redux" {
  export function useSelector<TState = ConnectState, TSelected = unknown>(
    selector: (state: TState) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
  ): TSelected;
}

export default [user];
