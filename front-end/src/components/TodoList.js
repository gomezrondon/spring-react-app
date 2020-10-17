import React from "react";
import Todo from "./Todo";



 const TodoList = ({todos,toggleItem}) =>{// hay que declarar props explicitamente
    return (
        todos.map(todo => {
            return <Todo key={todo.id} todo={todo} toggleItem={toggleItem} />
        })
    );
}

export default TodoList;


