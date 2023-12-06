import React, { useEffect } from 'react';
import { Form, Button, Select, Checkbox, DatePicker, Input } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import useForm from 'antd/es/form/hooks/useForm';
import { Rule } from 'rc-field-form/lib/interface';

export type Values = {
  id: number;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  finished: boolean;
  date: Date;
  rules: Rule[];
};

export type MyFormProps = {
  onAdd: (newTask: Values) => void;
  onEdit: (editedTask: Values) => void;
  editingTask: Values | null;
  taskCounter: number; // Nuevo
};

const MyForm: React.FC<MyFormProps> = ({ onAdd, onEdit, editingTask, taskCounter }) => {
  const [form] = useForm<Values>();

  useEffect(() => {
    if (editingTask) {
      form.setFieldsValue(editingTask);
    } else {  //// Si no hay tarea en modo de edición, reinicia los campos del formulario
      form.resetFields();
    }
  }, [editingTask, form]);

  // Función que se ejecuta al enviar el formulario con éxito:
  const onFinish = (values: Values) => {
      // Si hay una tarea en modo de edición, llama a la función onEdit con la tarea editada:
    if (editingTask) {
      onEdit({ ...values, id: editingTask.id });
    } 
    // Si no hay tarea en modo de edición, crea una nueva tarea con los valores del formulario y llama a onAdd:
    else {
      const newTask = { ...values, id: taskCounter };
      onAdd(newTask);
      //console.log('Success:', newTask);
    }
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<Values>) => {
    console.log('Failed:', errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Add a task' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Add a description' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Priority"
        name="priority"
        rules={[{ required: true, message: 'Select the priority' }]}
      >
        <Select>
          <Select.Option value="high">High</Select.Option>
          <Select.Option value="medium">Medium</Select.Option>
          <Select.Option value="low">Low</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Finished"
        name="finished"
        valuePropName="checked"
      >
        <Checkbox />
      </Form.Item>

      <Form.Item
        label="Delivery date"
        name="date"
        rules={[{ required: true, message: 'Please input the date' }]}
      >
        <DatePicker showTime />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button style={{ margin: '0.5rem' }} type="primary" htmlType="submit">
          Submit
        </Button>
        <Button  htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyForm;
