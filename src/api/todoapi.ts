import axios, { AxiosResponse } from 'axios';
import { Rule } from 'antd/es/form';

const BASE_URL = 'https://todos-api-dm5a.onrender.com/todo/';

export interface Todo { //FIXME ❔ Puedo usar Values y borrar Todo si son practicamente lo mismo? y que diferencia hay con ListProps
  id?: number; //FIXME dejo el id optativo?
  titulo: string;
  descripcion: string;
  fecha_finalizacion: Date ;
  prioridad: 'Alta' | 'Media' | 'Baja';
  completada: boolean;
  rules: Rule[];
 
  
}
export const getTodos = async (): Promise<Todo[]> => {
  const response: AxiosResponse<Todo[]> = await axios.get(BASE_URL);
  return response.data;
}; 
/*

export const addTodo = async (newTodo: Todo): Promise<Todo> => {
  const response: AxiosResponse<Todo> = await axios.post(BASE_URL, newTodo);
  return response.data;
};
export const updateTodo = async (updatedTodo: Todo): Promise<Todo> => { 
  const response: AxiosResponse<Todo> = await axios.put(`${BASE_URL}${updatedTodo.id}`, updatedTodo);
  return response.data;
};

*/
export const addTodo = async (newTodo: Todo): Promise<Todo> => {
  try {
    const response: AxiosResponse<Todo> = await axios.post('https://todos-api-dm5a.onrender.com/todo/alta', newTodo);  
    console.log('addTodo Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('addTodo Error:', error);
    throw error; 
  }
};


// TODO: Chequear que funcione updateTodo

export const updateTodo = async (updatedTodo: Todo): Promise<Todo> => {    
  const apiUrl = `https://todos-api-dm5a.onrender.com/todo/${updatedTodo.id}`;//FIXME ❔:PUT https://todos-api-dm5a.onrender.com/todo/undefined 

  try{
    const response: AxiosResponse<Todo> = await axios.put(apiUrl, updatedTodo);
    console.log('updateTodo Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('updateTodo Error:', error);
    throw error; 
  }

};

// TODO: Chequear que funcione deleteTodo
export const deleteTodo = async (taskId: number): Promise<Todo> => {

  try{
    const response: AxiosResponse<Todo> = await axios.delete(`${BASE_URL}/${taskId}`);//FIXME Revisar parametro si esta ok escrito
    console.log('deleTodo Response:', response.data);
    return response.data;
  }
  catch(error){
    console.error('deleteTodo Error:', error);
    throw error; 
  }  
};

/*
export const deleteTodo = async (taskId: number): Promise<Todo> => {
  const response: AxiosResponse<Todo> = await axios.delete(`${BASE_URL}/${taskId}`);
  return response.data;
};
*/