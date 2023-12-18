import React from 'react';
import { getTodos } from '../../api/todoapi';
import { Values } from './App';
import FormItems from '../view/FormItems';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import useForm from 'antd/es/form/hooks/useForm';

export type FormGetProps = {
  onGet: () => void; 
};


const FormGet: React.FC<FormGetProps> = ({ onGet }) => {
  const [form] = useForm<Values>(); 

  const onFinish = async () => {
    try {
      await getTodos();
      onGet();
      form.resetFields();
    } catch (error) {
      console.error('Error al conseguir las tareas:', error);
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



export default FormGet;
