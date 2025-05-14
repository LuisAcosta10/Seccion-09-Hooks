const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done:false,
}];

const todoReducer =( state = initialState, action = {} ) => {

    if ( action.type === '[TODO], add todo' ){
        // state.push ( action.payload ) //! //esto nunca se debe hacer por que es un push que rara ves se puede hacer, por que no se puede mutar el state 
        return [ ...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();

//! Para modificar un reducer tienen que mandar una accion que le dira como modificarse
//? ejemplo de lo dicho arriba

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
};

const addTodoAction = {
    type: '[TODO], add todo', // * simple string
    payload: newTodo,
}


todos = todoReducer( todos, addTodoAction);



// No se puede hacer esta mutación 
// todos.push ({
//     id: 2,
//     todo: 'Recolectar la piedra del poder',
//     done: false,
// });

console.log({state: todos});

