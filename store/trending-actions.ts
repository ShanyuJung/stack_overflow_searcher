import { api } from "@/utils/api";
import { trendingActions } from "./trending-slice";

export const initTrendingHandler = () => {
  return async (
    dispatch: (arg0: { payload: any; type: "trending/initTrending" }) => void
  ) => {
    try {
      const data = await api.fetchTrendingTags(10);
      const trendingData = {
        trendingTags: data.items,
        selectedTag: data.items[0].name,
        error: false,
      };
      dispatch(trendingActions.initTrending(trendingData));
    } catch (err) {
      dispatch(
        trendingActions.initTrending({
          trendingTags: [],
          selectedTag: "",
          error: true,
        })
      );
    }
  };
};
