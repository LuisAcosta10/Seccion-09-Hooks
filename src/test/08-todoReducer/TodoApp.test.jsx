import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../08-useReducer/TodoApp";
import { useTodos } from "../../hooks/";

jest.mock('../../hooks/');

describe('Pruebas en <TodoApp />', () => {

    useTodos.mockReturnValue({
        todos:[ 
            {id: 1, description: 'todos #1', done: false},
            {id: 2, description: 'todos #2', done: false},  
        ],
        todosCounter: 2,
        pendingTodos: 1, 
        handleDeleteTodo: jest.fn(), 
        handleNewTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    })
    

    test('debe de mostrar el componente correctamente', () => {
      
        render( <TodoApp /> );
        expect( screen.getByText ('todos #1')).toBeTruthy();
        expect( screen.getByText ('todos #2')).toBeTruthy();
        expect( screen.getByRole ('textbox')).toBeTruthy();
        // screen.debug();
    })
    
  
})
