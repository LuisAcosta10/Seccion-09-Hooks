import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";

describe('Pruebas en <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();
    
    beforeEach( () => jest.clearAllMocks() );
   
    test('debe de mostrar el Todo pendiente de completar', () => {
        render( 
            <TodoItem 
                todo = { todo } 
                onDeleteTodo = { onDeleteTodoMock } 
                onToggleTodo = { onToggleTodoMock } 
            />
        );

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')

        const spanlabel = screen.getByLabelText('span');
        // console.log(spanlabel.className);
       expect( spanlabel.className ).toBe('align-self-center ')
       expect( spanlabel.className ).toContain('align-self-center')
       expect( spanlabel.className ).not.toContain('text-decoration-line-through')

        // screen.debug(); //--> para ver el elemento (codigo)

    });


    test('debe de mostrar el Todo completado', () => {

        todo.done = true;

        render( 
            <TodoItem 
                todo = { todo } 
                onDeleteTodo = { onDeleteTodoMock } 
                onToggleTodo = { onToggleTodoMock } 
            />
        );

        const spanlabel = screen.getByLabelText('span');
        expect( spanlabel.className ).toContain('text-decoration-line-through')
    
    });
    
    test('span debe de llamar el Toggle Todo', () => {

        render( 
            <TodoItem 
                todo = { todo } 
                onDeleteTodo = { onDeleteTodoMock } 
                onToggleTodo = { onToggleTodoMock } 
            />
        );

        const spanlabel = screen.getByLabelText('span');
        fireEvent.click( spanlabel );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
        expect( onToggleTodoMock ).toHaveBeenCalled();
    });

    test('button debe de llamar el deleteTodo', () => {

        render( 
            <TodoItem 
                todo = { todo } 
                onDeleteTodo = { onDeleteTodoMock } 
                onToggleTodo = { onToggleTodoMock } 
            />
        );

        const deleteButton = screen.getByRole('button');
        const spanlabel = screen.getByLabelText('spanButton');
        
        fireEvent.click( deleteButton);
        fireEvent.click( spanlabel);
        
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
        expect( onDeleteTodoMock ).toHaveBeenCalled();
    });

    
  
});
