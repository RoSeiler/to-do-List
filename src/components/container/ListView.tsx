import { TodoList } from "../../api/types"

interface ListViewProps{

    list: TodoList
}

const ListView =(props: ListViewProps) =>{
console.log(props);

    return(
        <ul>
            {props.list.map(t=><li>{t.titulo}</li>)}
        </ul>
       

    )
}
export default ListView