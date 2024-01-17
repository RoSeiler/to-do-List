import { useState } from "react";
import { TodoList } from "../../api/types";
import ListView from "./ListView"
import React from "react";
import { getTodos, deleteTodo } from "../../api/todoapi";

const ListContainer =() =>{

  
    const [todos, setTodos] = useState<TodoList>([]);

  React.useEffect(() => {
    
    const caller = async () => {
      const data = await getTodos()

      setTodos(data)

    }

    caller()
  }, []); 
  console.log(todos);

    return(
       <ListView list={todos} deleteTodo={deleteTodo} />

    )
}

export default ListContainer

//definir una fn DeleteTodo y pasarla como prop a ListView