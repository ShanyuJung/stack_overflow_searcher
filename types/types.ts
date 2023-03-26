export interface TagDataInterface {
  count: number;
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  name: string;
}

export interface TrendingStore {
  trendingTags: TagDataInterface[];
  selectedTag: string;
  error: boolean;
}
