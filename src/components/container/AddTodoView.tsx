//aca va la vista del formulario - todo aca ahora!!
//cuando quiera grabar que se llame a algo similar al onClick - termina llamando onFinish

import { TodoApiAdd } from "../../api/types";
import { Form, Button, Select, Checkbox, DatePicker, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form'; 

interface AddTodoProps {
    xxx: number,
    onSave: (todo: TodoApiAdd) => Promise<void>
}

const AddTodoView = (props: AddTodoProps) => {
    const [form] = useForm(); // Inicializamos (y gestionamos)el estado del formulario el formulario usando el hook useForm

    const onFinish = async (formData: TodoApiAdd) => {
        try {
            await props.onSave(formData);
            
        } catch (error) {
           console.log("Error: "+ error);
        }
    };

    return (
        <Form
            form={form}
            onFinish={onFinish} // Llamamos a la función onFinish cuando el formulario se completa
        >
            <Form.Item 
            label="Título" 
            name="titulo" >
                <Input />
            </Form.Item>

            <Form.Item
        label="descripcion"
        name="descripcion"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="prioridad"
        name="prioridad"

      >
        <Select>
          <Select.Option value="Alta">Alta</Select.Option>
          <Select.Option value="Media">Media</Select.Option>
          <Select.Option value="Baja">Baja</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="completada"
        name="completada"
        valuePropName="checked"
      >
        <Checkbox />
      </Form.Item>

      <Form.Item
        label="fecha_finalizacion"
        name="fecha_finalizacion"
      >
        <DatePicker showTime />
      </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Crear
                </Button>
            </Form.Item>
        </Form>
    );
}

export default AddTodoView;





/*
import { TodoApiAdd } from "../../api/types";


interface AddTodoProps{

    xxx:number,
    onSave:(todo: TodoApiAdd) => Promise<void>
}

const AddTodoView = (props:AddTodoProps) => {

<div>
    <button onClick={()=>props.onSave({
        titulo:"nueva tarea 4 ", 
        descripcion:"descripcion",
        fecha_finalizacion: new Date(2025,1,1),
        prioridad:"Alta", 
        completada:false 
        })}>Crear
    </button>

</div>


}
export default AddTodoView
*/