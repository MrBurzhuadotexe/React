import React from "react"


class NewTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            error: "" 
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            text: event.target.value,
            error: "" 
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        if (this.state.text.trim() === "") {
            this.setState({ error: "Write a task!" }) 
            return
        }

        this.props.addTask(this.state.text)
        this.setState({ text: "", error: "" }) 
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="new-task-form">
                <input 
                    type="text" 
                    value={this.state.text} 
                    onChange={this.handleChange} 
                    placeholder="Enter new task"
                    className="new-task-input"
                />
                <button type="submit" className="new-task-button">Add</button>

                {this.state.error && (
                    <p style={{ color: "lightcoral", margin: "5px", padding: "5px" }}>{this.state.error}</p>
                )}
            </form>
        )
    }
}


export default NewTask
