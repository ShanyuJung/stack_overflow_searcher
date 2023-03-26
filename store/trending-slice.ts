import { TrendingStore } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TrendingStore = {
  trendingTags: [],
  selectedTag: "",
  error: false,
};

const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {
    initTrending(state, action) {
      state.trendingTags = action.payload.trendingTags;
      state.selectedTag = action.payload.selectedTag;
      state.error = action.payload.error;
    },
    selectTag(state, action) {
      state.trendingTags = state.trendingTags;
      state.selectedTag = action.payload.selectedTag;
      state.error = state.error;
    },
  },
});

export const trendingActions = trendingSlice.actions;

export default trendingSlice.reducer;
