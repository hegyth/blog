export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
  like: number;
  dislike: number;
}

export interface ReactionType {
  id: number;
  reaction: string;
}

export interface ReactionState {
  value: ReactionType[];
}

export interface PostState {
  value: PostType[];
}