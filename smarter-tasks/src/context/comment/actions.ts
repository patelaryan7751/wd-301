import { API_ENDPOINT } from "../../config/constants";
export const fetchComments = async (
  dispatch: any,
  project_id: any,
  task_id: any
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: "FETCH_COMMENTS_REQUEST" });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${project_id}/tasks/${task_id}/comments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    const sortedData = data.slice().sort((a: any, b: any) => {
      let dateA = new Date(a.createdAt).getTime(),
        dateB = new Date(b.createdAt).getTime();
      let diff = dateB - dateA;
      return diff;
    });
    dispatch({ type: "FETCH_COMMENTS_SUCCESS", payload: sortedData });
  } catch (error) {
    console.log("Error fetching comments:", error);
    dispatch({
      type: "FETCH_COMMENTS_FAILURE",
      payload: "Unable to load comments",
    });
  }
};

export const addComment = async (
  dispatch: any,
  args: any,
  project_id: any,
  task_id: any,
  userObject: any
) => {
  try {
    const token = localStorage.getItem("authToken") ?? "";
    const response = await fetch(
      `${API_ENDPOINT}/projects/${project_id}/tasks/${task_id}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(args),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create comment");
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message };
    }
    console.log("dataT", data);

    dispatch({
      type: "ADD_COMMENT_SUCCESS",
      payload: data,
    });
    return { ok: true };
  } catch (error) {
    console.error("Operation failed:", error);
    return { ok: false, error };
  }
};
