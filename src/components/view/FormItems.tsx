//unico componente con la estructura del form
import React from 'react';
import { Form, Button, Select, Checkbox, DatePicker, Input } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import useForm from 'antd/es/form/hooks/useForm';
import { Values } from '../container/App';

interface FormProps {
  onFinish: (values: Values) => void;
  onFinishFailed: (errorInfo: ValidateErrorEntity) => void;
  onReset: () => void;
  editingTask?: Values | null;
  handleDelete?: () => void;
}

const FormItems: React.FC<FormProps> = ({
  onFinish,
  onFinishFailed,
  onReset,
  editingTask,
  handleDelete,
}) => {
  const [form] = useForm<Values>();

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

export default FormItems;
