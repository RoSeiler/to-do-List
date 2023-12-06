import  { Values } from './MyForm';
import { useState } from 'react';

// CommonTaskLogic.ts
export const useTaskLogic = () => {
    const [tasks, setTasks] = useState<Values[]>([]);
    const [editingTask, setEditingTask] = useState<Values | null>(null);
  
    const handleAdd = (newTask: Values, taskCounter: number) => {
      setTasks([...tasks, { ...newTask, id: taskCounter }]);
    };
  
    const handleEdit = (editedTask: Values) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === editedTask.id ? editedTask : task))
      );
      setEditingTask(null);
    };
  
    const handleEditClick = (task: Values) => {
      setEditingTask(task);
    };
  
    const handleDelete = (taskId: number) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };
  
    return { tasks, editingTask, handleAdd, handleEdit, handleEditClick, handleDelete };
  };
  