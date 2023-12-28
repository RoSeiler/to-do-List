import React from 'react';
import { Rule } from 'antd/es/form';
import { Values } from './container/FormEdit';
import { Button } from 'antd';

interface ListProps {
  data: {
    id: number;
    title: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
    finished: boolean;
    date: Date;
    rules: Rule[];
  }[];
  onEditClick: (task: Values) => void;
  onDelete: (taskId: number) => void;
}

// TODO: Mostrar el listado segun los datos que traemos del backend

const List: React.FC<ListProps> = ({ data, onEditClick, onDelete }) => {

  // FIXME: Esto falla porque los datos no tiene la forma esperada por los types
  return (
    <div>
      <h2>List of Items:</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            Title: {item.title}, 
            Description: {item.description}, 
            Priority: {item.priority}, 
            Finished: {item.finished ? 'Yes' : 'No'}, 
            Date: {item.date?.toLocaleString()}
            <Button style={{ margin: '0.5rem' }} type="primary" onClick={() => onEditClick(item)} >Edit</Button>
            <Button  type="default" onClick={() => onDelete(item.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
