import React, { useEffect } from "react";

import { useCommentsDispatch } from "../../context/comment/context";
import { fetchComments } from "../../context/comment/actions";
import CommentListItems from "./CommentListItems";
interface CommentListProps {
  projectId: string | undefined;
  taskId: number;
}
const CommentList = (props: CommentListProps) => {
  const dispatchComments = useCommentsDispatch();

  useEffect(() => {
    fetchComments(dispatchComments, props.projectId, props.taskId);
  }, []);
  return (
    <div>
      <CommentListItems />
    </div>
  );
};
export default CommentList;
