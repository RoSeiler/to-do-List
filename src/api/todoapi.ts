import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://todos-api-dm5a.onrender.com/todo/';

// TODO: Cambiar este type para que refleje la realidad de lo que devuelve el backend
interface Todo {
  id: number;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  finished: boolean;
  date: Date;
}

export const getTodos = async (): Promise<Todo[]> => {
  const response: AxiosResponse<Todo[]> = await axios.get(BASE_URL);
  return response.data;
};

// TODO: Chequear que funcione addTodo
export const addTodo = async (newTodo: Todo): Promise<Todo> => {
  const response: AxiosResponse<Todo> = await axios.post(BASE_URL, newTodo);
  return response.data;
};

// TODO: Chequear que funcione updateTodo
export const updateTodo = async (updatedTodo: Todo): Promise<Todo> => {
  const response: AxiosResponse<Todo> = await axios.put(`${BASE_URL}/${updatedTodo.id}`, updatedTodo);
  return response.data;
};

// TODO: Chequear que funcione updateTodo
export const deleteTodo = async (taskId: number): Promise<Todo> => {
  const response: AxiosResponse<Todo> = await axios.delete(`${BASE_URL}/${taskId}`);
  return response.data;
};
