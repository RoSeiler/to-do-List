//Contenedor principal --  Incluye el header, el  FormEditCommon para gestionar tareas y List para mostrar la lista de tareas. Mantiene el estado de las tareas y la tarea que se está editando.
import TodoHeader from "../../pages/Header";
import List from '../view/List';
import { useState } from 'react';
import { Layout } from 'antd';
import FormEdit from "./FormEdit";
import { Rule } from "antd/es/form";
const { Content } = Layout;

export type Values = {
  id: number;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  finished: boolean;
  date: Date;
  rules: Rule[];
}; 


function App() {
  const [tasks, setTasks] = useState<Values[]>([]);
  const [editingTask, setEditingTask] = useState<Values | null>(null);

  const handleAdd = (newTask: Values) => {
    setTasks([...tasks, { ...newTask, id: tasks.length }]);
  };

  const handleEdit = (editedTask: Values) => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === editedTask.id ? editedTask : task))
    );
    setEditingTask(null);
  };

  const handleEditClick = (task: Values) => {
    setEditingTask(task);
  };

  const handleDelete = (taskId: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <Layout>
      <TodoHeader title="New Task" />
      <Content>
      <FormEdit onAdd={handleAdd} onEdit={handleEdit} onDelete={handleDelete} editingTask={editingTask} />
        <List data={tasks} onEditClick={handleEditClick} onDelete={handleDelete} />
      </Content>
    </Layout>
  );
}

export default App;
