import MyHeader from "./Header";
import List from './List';
import MyForm from './MyForm';
import { useState } from 'react';
import { Values } from './MyForm';
import { Layout } from 'antd';
const { Content } = Layout;



function App() {
  const [tasks, setTasks] = useState<Values[]>([]);
  const [editingTask, setEditingTask] = useState<Values | null>(null);
  const [taskCounter, setTaskCounter] = useState<number>(0); // Nuevo contador de tareas

  const handleAdd = (newTask: Values) => {
    // Agregar una nueva tarea
    setTasks([...tasks, { ...newTask, id: taskCounter }]);
    setTaskCounter(taskCounter + 1); // Incrementar el contador de tareas
  };

  const handleEdit = (editedTask: Values) => {
    // Editar una tarea existente
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === editedTask.id ? editedTask : task))
    );
    setEditingTask(null); // Terminar el modo de edición
  };

  const handleEditClick = (task: Values) => {
    // Activar el modo de edición
    setEditingTask(task);
  };

  const handleDelete = (taskId: number) => {
    // Eliminar una tarea
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <Layout> 
      <MyHeader title="New Task" />
      <Content>
        <MyForm onAdd={handleAdd} onEdit={handleEdit} editingTask={editingTask} taskCounter={taskCounter} />
        <List data={tasks} onEditClick={handleEditClick} onDelete={handleDelete} />
      </Content>
    </Layout>
  );
}

export default App;
