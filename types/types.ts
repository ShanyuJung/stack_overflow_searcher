export interface ITagData {
  count: number;
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  name: string;
}

export interface ITrendingStore {
  trendingTags: ITagData[];
  selectedTag: string;
  error: boolean;
}

export interface IQuestionOwner {
  account_id: number;
  reputation: number;
  user_id: number;
  user_type: string;
  accept_rate?: number;
  profile_image: string;
  display_name: string;
  link: string;
}

export interface IQuestion {
  tags: string[];
  owner: IQuestionOwner;
  is_answered: boolean;
  view_count: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  question_id: number;
  content_license?: string;
  link: string;
  closed_reason?: string;
  title: string;
}
