import React, { useEffect } from "react";

import CommentListItems from "./CommentListItems";
import { useCommentsDispatch } from "../../context/comment/context";
import { fetchComments } from "../../context/comment/action";
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
