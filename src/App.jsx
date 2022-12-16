// React
import { useState } from "react";

// CSS
import "./App.css";
import "../scss/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import { Task } from "./components/Task";
import { AddTaskForm } from "./components/AddTaskForm";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faPlus } from "@fortawesome/free-solid-svg-icons";

// ---------- App -----------------------------------

function App() {
  // Tasks State
  const [todoList, setTodoList] = useState([
    { id: Math.random().toString(16).slice(2), name: "Buy milk", status: true },
    {
      id: Math.random().toString(16).slice(2),
      name: "Drink water",
      status: false,
    },
    {
      id: Math.random().toString(16).slice(2),
      name: "Do homework",
      status: false,
    },
  ]);

  // Temp State
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Handle new task
  const handleNewTask = (e) => {
    setNewTask(e.target.value);
  };

  // Handle update task
  const handleUpdateTask = (id) => {
    const task = todoList.filter((task) => task.id == id);
    setUpdateData({
      id: task.id,
      name: task.name,
      status: task.status,
    });
  };

  // Add task
  const addTask = () => {
    if (newTask) {
      const task = {
        id: Math.random().toString(16).slice(2),
        name: newTask,
        status: false,
      };
      setTodoList([...todoList, task]);
      setNewTask("");
    }
  };

  // Delete task
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  // Complete task
  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, status: !task.status };
        } else {
          return task;
        }
      })
    );
  };

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData("");
  };

  // Cancel add
  const cancelAdd = () => {
    setNewTask("");
    handleVisibility();
  };

  // Change task for update
  const changeTask = (e) => {
    const task = {
      id: updateData.id,
      name: e.target.value,
      status: updateData.status,
    };
    setUpdateData(task);
  };

  // Update task
  const updateTask = () => {
    setTodoList(
      todoList.map((task) => (task.id === updateData.id ? updateData : task))
    );
    setUpdateData("");
  };

  const [visibility, setVisibility] = useState(false);
  const handleVisibility = (e) => {
    setVisibility((current) => !current);
  };

  // App Return
  return (
    <div>
      <div className="container App p-0 mt-3">
        <div className="card border-secondary bg-dark text-light col-lg-4 col-8 mx-auto">
          <div className="card-header border-secondary p-3 d-flex justify-content-between align-middle">
            <h5 className="card-title">
              <FontAwesomeIcon icon={faInbox} /> To-do List
            </h5>
            <button
              className="btn btn-primary fw-semibold text-light btn-sm px-4 ms-3"
              onClick={handleVisibility}
              type="button"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="card-body">
            <div className="">
              {visibility && (
                <AddTaskForm
                  newTask={newTask}
                  handleNewTask={handleNewTask}
                  handleVisibility={handleVisibility}
                  addTask={addTask}
                  cancelAdd={cancelAdd}
                />
              )}
            </div>

            <ul className="list-group mt-3">
              {todoList && todoList.length ? "" : "No tasks..."}

              {todoList

                // Display tasks
                .map((task) => {
                  return (
                    <Task
                      id={task.id}
                      name={task.name}
                      status={task.status}
                      completeTask={completeTask}
                      deleteTask={deleteTask}
                      handleUpdateTask={handleUpdateTask}
                      setUpdateData={setUpdateData}
                      updateData={updateData}
                      changeTask={changeTask}
                      updateTask={updateTask}
                      cancelUpdate={cancelUpdate}
                      key={task.id}
                    />
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
