import React from 'react';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import useForm from 'antd/es/form/hooks/useForm';
import FormItems from '../view/FormItems';
import { addTodo } from '../../api/todoapi';
import { Values } from './App';


export type FormAddProps = {
  onAdd: (newTask: Values) => void;
};

const FormAdd: React.FC<FormAddProps> = ({ onAdd }) => {
  const [form] = useForm<Values>();

  const onFinish = async (values: Values) => {
    try {
      const newTask = await addTodo(values); // Usamos la función addTodo de la API
      console.log('Tarea agregada correctamente:', newTask);
      onAdd(newTask); // Llamamos a la función onAdd con la nueva tarea
      form.resetFields();
    } catch (error) {
      console.error('Error al agregar la tarea:', error);
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
    />
  );
};

export default FormAdd;

























