import APIClient from "./api-client";

export interface Comment {
  id: number;
  author: number;
  attachment: string;
  text: string;
}

const commentService = <TData = any, TResponse = Comment>(
  workspace_id: number,
  project_id: number,
  board_id: number,
  task_id: number
) =>
  new APIClient<TData, TResponse>(
    `/workspaces/${workspace_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/comments/`
  );

export default commentService;

