import { useState } from 'react';
import FormEdit from '../components/container/FormEdit';
import TodoHeader from '../pages/Header';
import List from './List';
import { Layout } from 'antd';
const { Content } = Layout;
import { Values } from './container/FormEdit';

function TaskPage() {
  const [tasks, setTasks] = useState<Values[]>([]);
  const [editingTask, setEditingTask] = useState<Values | null>(null);

  const handleAdd = (newTask: Values) => {
    setTasks([...tasks, newTask]);
  };

  const handleEdit = (editedTask: Values) => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === editedTask.id ? editedTask : task))
    );
  };

  const handleEditClick = (task: Values) => {
    setEditingTask(task);
  };

  const handleDelete = (taskId: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <Layout>
      <TodoHeader title="Form" />
      <Content>
      <FormEdit onAdd={handleAdd} onEdit={handleEdit} onDelete={handleDelete} editingTask={editingTask} />
        <List data={tasks} onEditClick={handleEditClick} onDelete={handleDelete} />
      </Content>
    </Layout>
  );
}

export default TaskPage;
