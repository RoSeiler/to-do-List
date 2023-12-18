import React from 'react';
import { deleteTodo } from '../../api/todoapi';
import { Values } from './App';
import FormItems from '../view/FormItems';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import useForm from 'antd/es/form/hooks/useForm';


export type FormDeleteProps = {
  taskId: number;
  onDelete: () => void;
};

const FormDelete: React.FC<FormDeleteProps> = ({ taskId, onDelete }) => {
  const [form] = useForm<Values>(); 

  const onFinish = async () => {
    try {
      await deleteTodo(taskId);
      onDelete(); // Esta función se ejecutará después de la eliminación exitosa
      form.resetFields();
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
    console.log('Error al enviar el formulario de eliminación:', errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };


    return (
      <FormItems
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onReset={onReset}
      />
    
  )
  
  
};

export default FormDelete;