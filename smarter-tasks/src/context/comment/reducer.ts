import { CommentsActions, CommentsState } from "./types";

export const initialState: CommentsState = {
  comments: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

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
            let diff = dateA - dateB;
            return diff;
          }),
      };
    default:
      return state;
  }
};
