import axios from "axios";

export const tasksApi = axios.create({
    baseURL: "http://localhost:9000",
});
export const getTasks = () => {
    return tasksApi.get("/tasks");
}
export const deleteTask = (task) => {
    return tasksApi.delete(`/tasks+${task.id}`);
}
export const addTask = (task) => {
    return tasksApi.post("/tasks", task);
}
export const updateTask = (task) => {
    return tasksApi.put(`/tasks/${task.id}`, task);
}
export const getTask = (id) => {
    return tasksApi.get(`/tasks/${id}`);
}
export const checkTask = (task) => {
    return tasksApi.patch(`/tasks/${task.id}`, {done: !task.done});
}

