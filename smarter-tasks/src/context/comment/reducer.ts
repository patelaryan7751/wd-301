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

export const initialState: CommentsState = {
  comments: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export type CommentsActions =
  | { type: "FETCH_COMMENTS_REQUEST" }
  | { type: "FETCH_COMMENTS_SUCCESS"; payload: Comment[] }
  | { type: "FETCH_COMMENTS_FAILURE"; payload: string }
  | { type: "ADD_COMMENT_SUCCESS"; payload: Comment };

export const reducer = (
  state: CommentsState = initialState,
  action: CommentsActions
): CommentsState => {
  switch (action.type) {
    case "FETCH_COMMENTS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_COMMENTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
      };
    case "FETCH_COMMENTS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case "ADD_COMMENT_SUCCESS":
      return {
        ...state,
        comments: [...state.comments, action.payload]
          .slice()
          .sort((a: any, b: any) => {
            let dateA = new Date(a.createdAt).getTime(),
              dateB = new Date(b.createdAt).getTime();
            let diff = dateB - dateA;
            return diff;
          }),
      };
    default:
      return state;
  }
};
