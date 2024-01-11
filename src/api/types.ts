
export interface TodoApi { 
    id: number; 
    titulo: string;
    descripcion: string;
    fecha_finalizacion: Date ;
    prioridad: 'Alta' | 'Media' | 'Baja';
    completada: boolean;
 
}

/*
TodoList es una lista de tareas donde cada tarea sigue la estructura definida por la interfaz TodoApi.
*/
export type TodoList = TodoApi[]

export interface TodoApiAdd { 
    
    titulo: string;
    descripcion: string;
    fecha_finalizacion: Date ;
    prioridad: 'Alta' | 'Media' | 'Baja';
    completada: boolean;
 
}