import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { addComment } from "../../context/comment/actions";
import { useCommentsDispatch } from "../../context/comment/context";
type Inputs = {
  comment: string;
};

function CommentInput(props: any) {
  const storedUserData: any = () => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      return JSON.parse(userData);
    }
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatchComments = useCommentsDispatch();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { comment } = data;
    const response = await addComment(
      dispatchComments,
      {
        description: comment,
        owner: storedUserData?.id,
      },
      props.projectID,
      props.taskId
    );
    if (response.ok) {
      // setIsOpen(false);
      console.log("Comment added");
      reset();
    } else {
      // setError(response.error as React.SetStateAction<null>);
    }
  };
  return (
    <div>
      <div className="m-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-2 flex rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <input
                type="text"
                id="commentBox"
                {...register("comment", { required: true })}
                className={`block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                  errors.comment ? "border-red-500" : ""
                }`}
                placeholder="Write your comment here"
              />
              {errors.comment && <span>This field is required</span>}
            </div>
            <button
              id="addCommentBtn"
              type="submit"
              className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Add Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommentInput;
