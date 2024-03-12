import { CreateTask, UpdateTask } from "../interface/task.interface";

const API = "http://localhost:3000/api";

export const getTasksRequest = async () => fetch(`${API}/tasks`);

export const createTaskRequest = async (task: CreateTask) =>
  fetch(`${API}/tasks`, {
    method: ,
    body: ,
    headers: {
      "Content-Type": "application/json",
    },
  });

export const deleteTaskRequest = async (id: string) =>
  ;

export const updateTaskRequest = async (id: string, task: UpdateTask) =>
  ;

export const getTaskRequest = async (id: string) => ;
