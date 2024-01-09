import TodoHeader from "../../pages/Header";
import List from '../List';
import FormEdit from './FormEdit';
import React, { useState, useEffect } from 'react';
import { Rule } from 'antd/es/form';
import { Values } from './FormEdit';
import { Layout } from 'antd';
import { getTodos, addTodo, updateTodo, Todo } from "../../api/todoapi";


const { Content } = Layout;

function App() {
  const [editingTask, setEditingTask] = useState<Values | null>(null);

  
  // TODO: Este useEffect seria bueno transformarlo en un hook
  
  
    const [tasks, setTasks] = useState<Todo[]>([]);

  React.useEffect(() => {
    const caller = async () => {
      const data = await getTodos()

      setTasks(data)

    }

    caller()
  }, []);
 //Hasta aca
  //FIXME ❔ Revisar el hook useTodos

  const useTodos = () => {
    const [tasks, setTasks] = useState<Todo[]>([]);
  
    useEffect(() => {
      const fetchTodos = async () => {
        const data = await getTodos();
        setTasks(data);
      };
  
      fetchTodos();
    }, []);
  
    return tasks;
  };


  //addTodo:
  React.useEffect(() => {
    const caller = async () => {
      //FIXME ❔ Problema con Rules (?)
      const data = await addTodo({ 
        completada:false, 
        descripcion:"algo", 
        prioridad:"Alta", 
        titulo:"tarea2", 
        fecha_finalizacion:new Date(2025,4,4)
      })

      console.log(data);

    }

    caller()
  }, []);

  //updateTodo:
  React.useEffect(() => {
    const caller = async () => {
      try {
        const data = await updateTodo({
          completada: true,
          descripcion: "mi descripcion",
          prioridad: "Alta",
          titulo: "tarea3",
          fecha_finalizacion: new Date(2025, 4, 4)
        });

        console.log('Update successful:', data);
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    };

    caller()
  }, []);


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
