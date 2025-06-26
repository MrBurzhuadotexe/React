import React from "react"

function Filter(props) {
    return (
        <div className="filter">
            <input 
                type="checkbox" 
                id="hideCompleted" 
                checked={props.hideCompleted} 
                onChange={props.toggleHideCompleted}
            />
            <label htmlFor="hideCompleted">Ukryj wykonane zadania</label>
        </div>
    )
}

export default Filter
