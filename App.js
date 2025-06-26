import React from "react"
import Task from "./Task"
import NewTask from "./NewTask"
import Filter from "./Filter"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            hideCompleted: false,
        
        }
        this.handleChange = this.handleChange.bind(this)
        this.addTask = this.addTask.bind(this)
    }
    
    deleteTask = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== id)
        }))
    }
    
    toggleHideCompleted = () => {
        this.setState(prevState => ({
            hideCompleted: !prevState.hideCompleted
        }))
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo
            })
            return { todos: updatedTodos }
        })
    }

    addTask(text) {
        this.setState(prevState => {
            const newTask = {
                id: Date.now(), // prosty unikalny ID
                text: text,
                completed: false
            }
            return {
                todos: [...prevState.todos, newTask]
            }
        })
    }

    render() {
      
        const visibleTodos = this.state.todos.filter(todo => 
            this.state.hideCompleted ? !todo.completed : true
        )

        const todoItems = visibleTodos.length > 0
            ? visibleTodos.map(item => (
            <Task 
                key={item.id} 
                item={item} 
                handleChange={this.handleChange} 
                deleteTask={this.deleteTask}
            />            
            ))
            : <p style={{ fontWeight: "bold" }}>Nothing to do yeey :)</p>
                        

        return (
          
            <div className="todo-list">
                <h2 className="Title">My list</h2>
                <Filter 
                    hideCompleted={this.state.hideCompleted} 
                    toggleHideCompleted={this.toggleHideCompleted}
                />
                {todoItems}
                <NewTask addTask={this.addTask}/>
            </div>
        )
    }
}

export default App
