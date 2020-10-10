import React from 'react';

// Import Components
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.todos.map((todo) => {
                    return <Todo todo={todo} todos={props.todos} setTodos = {props.setTodos} text={todo.text} key={props.id}/>
                })}
            </ul>  
        </div>
    )
}

export default TodoList;