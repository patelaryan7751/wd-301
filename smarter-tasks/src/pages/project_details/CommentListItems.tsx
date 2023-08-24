import { useCommentsState } from "../../context/comment/context";
import { Comment } from "../../context/comment/reducer";
export default function CommentListItems() {
  let state: any = useCommentsState();
  const { comments, isLoading, isError, errorMessage } = state;
  console.log(comments, "llk");
  if (comments.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <div>
      <ul role="list" className="divide-y divide-gray-100 m-2">
        {comments.map((comment: Comment) => (
          <li key={comment?.id} className="comment flex gap-x-4 py-5">
            <div className="flex-auto">
              <div className="flex items-baseline justify-between gap-x-4">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {comment?.User?.name}
                </p>
                <p className="flex-none text-xs text-gray-600">
                  {new Date(comment?.createdAt).toLocaleString("en-IN")}
                </p>
              </div>
              <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">
                {comment?.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
