import React from 'react'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodos } from '../hooks'

export const TodoApp = () => {

    const {todos, todosCounter, pendingTodos, handleDeleteTodo, handleNewTodo, handleToggleTodo} = useTodos()
    return (
        <>
            <h1>TodoApp: {todosCounter}, <small>Pendientes: {pendingTodos}</small></h1>
            <hr />

            <div className='row'> 
                <div className='col-7'>
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}                    
                    />
                </div>

                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo }/>
                </div>
            </div>
           
        </>
    )
}

// export default todoApp
