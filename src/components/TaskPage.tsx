import MyForm from './MyForm';
import MyHeader from './Header';
import  List  from './List';
import { Layout } from 'antd';
const { Content } = Layout;
import  { Values } from './MyForm';
import { useState } from 'react';

function TaskPage() {
  const [tasks, setTasks] = useState<Values[]>([]);
   // Estado para la tarea que se está editando actualmente (si no hay edición le puse null ❓)
  const [editingTask, setEditingTask] = useState<Values | null>(null); 

  const handleAdd = (newTask: Values) => {
    // Agregamos una nueva tarea y actualizamos
    setTasks([...tasks, newTask]);
  };

  const handleEdit = (editedTask: Values) => {
    // Editamos una tarea existente
    setTasks(prevTasks => // de FrontendMasters❕ iteramos sobre las tareas del estado anterior
      prevTasks.map(task => (task.id === editedTask.id ? editedTask : task))
    );
   
  };

  const handleEditClick = (task: Values) => {
    // Activamos el modo de edición
    setEditingTask(task);
  };

  const handleDelete = (taskId: number) => {
    // El filter crea un nuevo arr que incluirá solo los elementos que cumplen con cierta condición❕
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <Layout>
      <MyHeader title="Form" />
      <Content>
        <MyForm onAdd={handleAdd} onEdit={handleEdit} editingTask={editingTask} taskCounter={0} />
        <List data={tasks} onEditClick={handleEditClick} onDelete={handleDelete} />
      </Content>
    </Layout>
  );
}

export default TaskPage;

/*Sin null:

function TaskPage() {
  const [tasks, setTasks] = useState<Values[]>([]);
  (inicializado como objeto vacío)
  const [editingTask, setEditingTask] = useState<Values>({ id: 0, title: '', description: '', priority: 'low', finished: false, date: new Date(), rules: [] }); 

  const handleAdd = (newTask: Values) => {
    
    setTasks([...tasks, newTask]);
  };

  const handleEdit = (editedTask: Values) => {
    
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === editedTask.id ? editedTask : task))
    );
    // Reiniciamos el modo de edición al objeto vacío
    setEditingTask({ id: 0, title: '', description: '', priority: 'low', finished: false, date: new Date(), rules: [] });
  };

  const handleEditClick = (task: Values) => {
    
    setEditingTask(task);
  };

  const handleDelete = (taskId: number) => {
 
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <Layout>
      <MyHeader title="Form" />
      <Content>
        <MyForm onAdd={handleAdd} onEdit={handleEdit} editingTask={editingTask} taskCounter={0} />
        <List data={tasks} onEditClick={handleEditClick} onDelete={handleDelete} />
      </Content>
    </Layout>
  );
}

export default TaskPage;


*/