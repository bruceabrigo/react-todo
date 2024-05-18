import React, { useState} from "react"


const ToDoList = () => {

    // define a tasks state variable
    const [tasks, setTasks] = useState(["Study for Accenture...", "Get Ready for Accenture...", "See my GF Madi at Work!"]);
    // create a new state variable to set a new task
    // initial state will be an empty string
    // setNewTask will add a string variable to the tasks array
    const [newTask, setNewTask] = useState("")

    // define a function to handle inputs
    // it will take an event handler
    const handleInputChange = (event) => {
        // handle input should access enter event and target value
        setNewTask(event.target.value);
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
                {/* button element will handle the input change */}
                <button 
                    className="add-button"
                    onClick={addTask}
                    >
                    Add
                </button>
            </div>
            {/* show an ordered list to display tasks */}
            <ol>
                {/* use js map method to seek through tasks array */}
                {tasks.map((task, index) => {
                    return (
                        // ensuring adding index as key will alow react to remove the proper task at its current index in the array
                        // this prevents removing all tasks or the wrong task
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}
                        >
                            Up
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}
                        >
                            Down
                        </button>
                    </li>
                    )
                })}
            </ol>
        </div>
    )
}
export default ToDoList