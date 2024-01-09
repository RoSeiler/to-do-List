import React from 'react';
import { Rule } from 'antd/es/form';
import { Form, Button, Select, Checkbox, DatePicker, Input } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import useForm from 'antd/es/form/hooks/useForm';

import { addTodo, updateTodo, deleteTodo } from '../../api/todoapi';


export type Values = {
  id?: number;
  titulo: string;
  descripcion: string;
  fecha_finalizacion: Date ;
  prioridad: 'Alta' | 'Media' | 'Baja';
  completada: boolean;
  rules: Rule[]; //❔FIXME Este rules aca tmb es neecsario? pasa algo si esta solo en Todo?
};

export type FormProps = {
  onAdd: (newTask: Values) => void;
  onEdit: (editedTask: Values) => void;
  onDelete: (taskId: number) => void;
  editingTask: Values | null;
};

const FormEdit: React.FC<FormProps> = ({ onAdd, onEdit, onDelete, editingTask }) => {
  const [form] = useForm<Values>();

  React.useEffect(() => {
    if (editingTask) {
      form.setFieldsValue(editingTask);
    } else {
      form.resetFields();
    }
  }, [editingTask, form]);

  const onFinish = async (values: Values) => {
    try {
      if (editingTask) {
        await updateTodo({ ...values, id: editingTask.id });
        onEdit({ ...values, id: editingTask.id });
      } else {
        const newTodo = await addTodo({ ...values, id: Date.now() });
        onAdd(newTodo);
      }
    } catch (error) {
      console.error('Error saving todo:', error);
    }

    form.resetFields();
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<Values>) => {
    console.log('Failed:', errorInfo);
  };

  const handleDelete = async () => {
    if (editingTask && editingTask.id !== undefined) {
      try {
        await deleteTodo(editingTask.id);
        onDelete(editingTask.id);
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    }
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
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        {editingTask && (
          <Button onClick={handleDelete}>
            Delete
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default FormEdit;
