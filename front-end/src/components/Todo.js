import React from "react";


export const Todo = ({todo, toggleItem}) =>{  // el corchete es necesario!!!

    function handleCheck() {
        toggleItem(todo.id)
    }

    return (
        <div>
            <input type={"checkbox"} checked={todo.complete} onChange={handleCheck}/>
            {todo.name}
        </div>
    );

}

export default Todo;