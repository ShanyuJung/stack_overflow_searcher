import { trendingActions } from "./trending-slice";

export const initTrendingHandler = () => {
  return async (
    dispatch: (arg0: { payload: any; type: "trending/initTrending" }) => void
  ) => {
    try {
      const res = await fetch(
        "https://api.stackexchange.com/2.3/tags?page=1&pagesize=10&order=desc&sort=popular&site=stackoverflow"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await res.json();
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
