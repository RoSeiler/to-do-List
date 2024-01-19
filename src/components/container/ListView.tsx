
import { TodoList } from "../../api/types";
import { Button } from "antd";

interface ListViewProps {
  list: TodoList;
  deleteTodo: (todoId: number) => void;
}

const ListView = (props: ListViewProps) => {
  return (
    <ul>
      {props.list.map((todo) => (
        <li key={todo.id}>
          {todo.titulo}
          <Button onClick={() => props.deleteTodo(todo.id)}>Delete</Button>
        </li>
      ))}
    </ul>
  );
};

export default ListView;


//agregar una funcion q me permita borrar todos - obtengo la fn y se la paso a la vista
//en la interefaz de listviewprops agregar un tipo (deletetodo) el boton tiene q ejecutar la fn (prop onDeleteTodo)