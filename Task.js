import React from "react"

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    
    return (
        <div className="todo-item">
            <div className="task-content">
                <input 
                    type="checkbox" 
                    checked={props.item.completed} 
                    onChange={() => props.handleChange(props.item.id)}
                />
                <p style={props.item.completed ? completedStyle : null}>
                    {props.item.text}
                </p>
            </div>
            <button className="DeleteButton" onClick={() => props.deleteTask(props.item.id)}>
                ❌
            </button>
        </div>
    )
}

export default TodoItem