import { useState } from "react";
import commentService, { Comment } from "../services/comment-service";

const [comments, setComments] = useState<Comment[]>();
const [error, setError] = useState<Error>();

const useComments = () => {
  const getAllComments = (
    workspaceId: number,
    projectId: number,
    boardId: number,
    taskId: number
  ) => {
    commentService(workspaceId, projectId, boardId, taskId)
      .getAll()
      .then((res) => setComments(res.data))
      .catch((err) => setError(err));
  };
  return { getAllComments, comments, error };
};

export default useComments;
