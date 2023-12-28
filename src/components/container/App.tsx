import TodoHeader from "../../pages/Header";
import List from '../List';
import FormEdit from './FormEdit';
import React, { useState } from 'react';
import { Values } from './FormEdit';
import { Layout } from 'antd';
import { addTodo, getTodos } from "../../api/todoapi";
const { Content } = Layout;

function App() {
  const [editingTask, setEditingTask] = useState<Values | null>(null);

  // TODO: Este useEffect seria bueno transformarlo en un hook
  const [tasks, setTasks] = useState<Values[]>([]);

  React.useEffect(() => {
    const caller = async () => {
      const data = await getTodos()

      setTasks(data)

    }

    caller()
  }, [])
  // Hasta Aca

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
