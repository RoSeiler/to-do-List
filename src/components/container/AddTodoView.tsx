//aca va la vista del formulario - todo aca ahora!!
//cuando quiera grabar que se llame a algo similar al onClick - termina llamando onFinmish
import { TodoApiAdd } from "../../api/types";


interface AddTodoProps{

    xxx:number
    onSave:(todo: TodoApiAdd) => Promise<void>
}

const AddTodoView = (props:AddTodoProps) => {

    return(
        <div>
            <button onClick={()=>props.onSave({
                titulo:"nueva tarea 4 ", 
                descripcion:"descripcion",
                fecha_finalizacion: new Date(2025,1,1),
                prioridad:"Alta", 
                completada:false 
                })}>Crear</button>
        </div>
    )
    
}

export default AddTodoView