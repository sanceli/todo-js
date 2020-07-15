import { Todo } from "./todo.class";

export class TodoList {
     constructor() {
         this.cargarLocalStorage();
     }

     nuevoTodo( todo ) {
         this.todos.push( todo);
         this.guardarLocalStogage();
     }

     eliminarTodo(id) {
        
        this.todos = this.todos.filter( todo => todo.id != id )
        this.guardarLocalStogage();
     }

     marcarCompletado(id) {
         for ( const todo of this.todos) {
             
             if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStogage();
                break;
            }
        }




     }

     elimnarCompletados() {

        this.todos = this.todos.filter( todo => todo.completado);
        this.guardarLocalStogage();
         
     }


     guardarLocalStogage() {
        
        localStorage.setItem('todo', JSON.stringify(this.todos) ); 

     }

     cargarLocalStorage() {
        
        this.todos = ( localStorage.getItem('todo')) 
                ?JSON.parse(localStorage.getItem('todo')) 
                : [];
        
        this.todos = this.todos.map( obj  => Todo.fromJson( obj ));



     }

}