// React
import { useState } from "react";

// CSS
import "./App.css";
import "../scss/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// JS
import "bootstrap/js/dist/collapse.js";
import "bootstrap/js/dist/offcanvas.js";
import "bootstrap/js/dist/modal.js";

import { Camera } from 'react-feather';

// Components
import { Task } from "./components/Task";
import { AddTaskForm } from "./components/AddTaskForm";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faInbox,
  faPlus,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

// ---------- App -----------------------------------

function App() {
  // Tasks State
  const [todoList, setTodoList] = useState([
    { id: Math.random().toString(16).slice(2), 
      name: "Buy milk",
      status: true },
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

      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-semibold text-dark" href="#"><FontAwesomeIcon icon={faInbox} /> To-do List</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div> */}
        </div>
      </nav>

      <div 
        className="row d-flex"
        style={{height: '100%', width: '100%'}}
      >

        {/* <div className="col-2">
          <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark">
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <a href="#" className="nav-link active rounded-pill" aria-current="page">
                  <FontAwesomeIcon icon={faInbox} /> Inbox
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="nav-link text-white">

                <FontAwesomeIcon icon={faInbox}/> Inbox
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">

                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">

                  Products
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">

                  Customers
                </a>
              </li> */}
            {/* </ul>
            <hr />
            <div className="dropdown">
              <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                <strong>mdo</strong>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div> */}

        <div className="col-12 d-flex justify-content-center">

  
        <div className="card col-12 col-lg-8 mx-0 mx-lg-5 mt-3 border-0 ">
          <div className="card-header p-3 bg-white">
            <h5 className="card-title mb-0">
              <FontAwesomeIcon icon={faInbox} /> Inbox
            </h5>
            <button
              className="btn btn-primary px-3 fw-semibold text-light rounded-pill position-fixed bottom-0 end-0 m-3 z-index"
              style={{zIndex: '999999'}}
              onClick={handleVisibility}
              type="button"
            >
              <FontAwesomeIcon icon={faPlus} /> Add Task
            </button>
          </div>
          <div className="card-body col-12 p-0 p-lg-3">
            <div className="">
              <div className="">
                <div className="">
                  {/* {visibility && (
                    <AddTaskForm
                      newTask={newTask}
                      handleNewTask={handleNewTask}
                      handleVisibility={handleVisibility}
                      addTask={addTask}
                      cancelAdd={cancelAdd}
                    />
                  )} */}
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

        </div>

      </div>


      
      <button 
      type="button" 
      className="btn btn-primary px-3 fw-semibold text-light rounded-pill position-fixed bottom-0 end-0 m-3 z-index"
      style={{zIndex: '999999'}}
      data-bs-toggle="modal" 
      data-bs-target="#addTaskModal"
      >
        
      <FontAwesomeIcon icon={faPlus}/> Add Task

      </button>

      <div class="modal fade" id="addTaskModal" tabindex="-1" aria-labelledby="addTaskModalLabel" aria-hidden="true">
        <AddTaskForm
          newTask={newTask}
          handleNewTask={handleNewTask}
          handleVisibility={handleVisibility}
          addTask={addTask}
          cancelAdd={cancelAdd}
        />
      </div>

    </div>
  );
}

export default App;
