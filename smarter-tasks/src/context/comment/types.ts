export interface Comment {
  User: any;
  createdAt: string | number | Date;
  id: any;
  description: string;
  task_id: any;
  owner: any;
}

export interface CommentsState {
  comments: Comment[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}
export type CommentsActions =
  | { type: "FETCH_COMMENTS_REQUEST" }
  | { type: "FETCH_COMMENTS_SUCCESS"; payload: Comment[] }
  | { type: "FETCH_COMMENTS_FAILURE"; payload: string }
  | { type: "ADD_COMMENT_SUCCESS"; payload: Comment };
