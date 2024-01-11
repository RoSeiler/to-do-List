//aca va la logica de llamar y grabar
// laf que graba
import { addTodo } from "../../api/todoapi";
import { TodoApiAdd } from "../../api/types"
import AddTodoView from "./AddTodoView"


const AddTodoContainer = () =>{

    const saveTodo = async (todo:TodoApiAdd) => {
         addTodo(todo);
    }
    return(
        <AddTodoView xxx={8} onSave={saveTodo}/> 
    )
}

export default AddTodoContainer