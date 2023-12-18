import React from 'react';
import { updateTodo } from '../../api/todoapi';
import FormItems from '../view/FormItems';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import useForm from 'antd/es/form/hooks/useForm';
import { Values } from './App';

export type FormEditProps = { 
  onEdit: (updatedTask: Values) => void;
  editingTask: Values | null;
  onAdd: (newTask: Values) => void;
  onDelete: (taskId: number) => void;
};
  
const FormEdit: React.FC<FormEditProps> = ({ onEdit, editingTask }) => {
  const [form] = useForm<Values>();

  const onFinish = async (values: Values) => {
    try {
      const updatedTask = await updateTodo(values); // Utiliza la función updateTodo de la API
      console.log('Tarea actualizada correctamente:', updatedTask);
      onEdit(updatedTask); // Llamamos a la función onEdit con la tarea actualizada
      form.resetFields();
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
    }
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
    console.log('Error al enviar el formulario:', errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <FormItems
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onReset={onReset}
      editingTask={editingTask} // Pasamos la tarea a editar como prop a FormItems
    />
  );
};

export default FormEdit;

