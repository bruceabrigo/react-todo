import React, { useState} from "react"


const ToDoList = () => {

    // define a tasks state variable
    // which will be an empty array named tasks
    const [tasks, setTasks] = useState([]);
    // create a new state variable to set a new task
    // initial state will be an empty string
    // setNewTask will add a string variable to the tasks array
    const [newTask, setNewTask] = useState("")

    // define a function to handle inputs
    // it will take an event handler
    const handleInputChange = (event) => {

    }
    // function to add a new task
    const addTask = () => {

    }
    // function to delete an existing task
    const deleteTask = () => {

    }
    // create functions to allow client to move tasks up and down
    // taskUp and taskDown need to take in an index parameter
    const moveTaskUp = (index) => {

    }
    
    const moveTaskDown = (index) => {

    }
    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    // value will take newTask variable
                    // input will call the newTask variable and input string from the input
                    value={newTask}
                    // add an onChange handler
                    // call handleInputChange function
                    onChange={handleInputChange}
                />
            </div>
        </div>
    )
}
export default ToDoList