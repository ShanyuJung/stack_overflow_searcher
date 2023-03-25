import {
  AnyAction,
  CombinedState,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import trending from "./trending-slice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { TrendingStore } from "@/types/types";

const combineReducer = combineReducers({ trending });

const masterReducer = (
  state: CombinedState<{ trending: TrendingStore }> | undefined,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      trending: {
        trendingTags: action.payload.trending.trendingTags,
        selectedTag: action.payload.trending.selectedTag,
        error: action.payload.trending.error,
      },
    };
    return nextState;
  } else {
    return combineReducer(state, action);
  }
};

const makeStore = () => configureStore({ reducer: masterReducer });

export default makeStore;

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
