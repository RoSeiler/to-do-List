import React from 'react';
import { Rule } from 'antd/es/form';
import { Values } from './container/FormEdit';
import { Button } from 'antd';

interface ListProps { //FIXME ❔
  data: {
    id?: number;
    titulo: string;
    descripcion: string;
    fecha_finalizacion: Date;
    prioridad: 'Alta' | 'Media' | 'Baja';
    completada: boolean;
    rules: Rule[];
  }[];
  onEditClick: (task: Values) => void;
  onDelete: (taskId: number) => void;
}



const List: React.FC<ListProps> = ({ data, onEditClick, onDelete }) => {

  
  return (
    <div>
      <h2>List of Items:</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            Title: {item.titulo}, 
            Description: {item.descripcion}, 
            Priority: {item.prioridad}, 
            Finished: {item.completada ? 'Yes' : 'No'}, 
            Date: {item.fecha_finalizacion.toLocaleString()}
            <Button style={{ margin: '0.5rem' }} type="primary" onClick={() => onEditClick(item)} >Edit</Button>
            <Button type="default" onClick={() => {if(item.id !== undefined) onDelete(item.id)}}>Delete</Button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
