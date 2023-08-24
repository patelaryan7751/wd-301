import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  reducer,
  initialState,
  CommentsState,
  CommentsActions,
} from "./reducer";
const CommentsStateContext = createContext<CommentsState | undefined>(
  undefined
);
type CommentsDispatch = React.Dispatch<CommentsActions>;
const CommentsDispatchContext = createContext<CommentsDispatch | undefined>(
  undefined
);
export const useCommentsState = () => useContext(CommentsStateContext);
export const useCommentsDispatch = () => useContext(CommentsDispatchContext);
export const CommentsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log(state, "comment");
  });
  return (
    <CommentsStateContext.Provider value={state}>
      <CommentsDispatchContext.Provider value={dispatch}>
        {children}
      </CommentsDispatchContext.Provider>
    </CommentsStateContext.Provider>
  );
};
