// React
import { useState } from "react";

// CSS
import "./App.css";
import "../scss/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// JS
import "bootstrap/js/dist/collapse.js";
import "bootstrap/js/dist/offcanvas.js";

// Components
import { Task } from "./components/Task";
import { AddTaskForm } from "./components/AddTaskForm";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faInbox, faPlus, faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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

      {/* <nav className="navbar navbar-expand-lg bg-dark border-bottom border-secondary">
        <div className="container-fluid">
        <button className="btn bg-transparent text-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><FontAwesomeIcon icon={faBars} /></button>
        <form className="d-flex" role="search">
          <div className="input-group input-group-sm mb-3">
            <input type="text" className="form-control bg-dark text-light" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
            <span className="input-group-text bg-dark text-light" id="inputGroup-sizing-sm"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
          </div>    
        </form>
          <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faInbox} /> To-do List</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>

      <div className="d-flex nowrap">

      

      <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p>Try scrolling the rest of the page to see this option in action.</p>
        </div>
      </div>

      <div className="d-flex flex-column flex-shrink-0 p-3 border-end border-secondary offcanvas vh-100">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span className="fs-4">Sidebar</span>
          </a>
          <hr/>
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                
                Dashboard
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
            </li>
          </ul>
          <hr/>
          <div className="dropdown">
            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
              <strong>mdo</strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
              <li><a className="dropdown-item" href="#">New project...</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
        </div> */}


      <div className="container App p-0 mt-3 mb-5">
        <div className="card col-lg-6 col-md-10 col-11 col-sm-11 border-secondary bg-dark text-light mx-auto">
          <div className="card-header border-secondary p-3 d-flex justify-content-between align-middle">
            <h5 className="card-title">
              <FontAwesomeIcon icon={faInbox} /> To-do List
            </h5>
            {/* <button
              className="btn btn-primary fw-semibold text-light btn-sm px-4 ms-3"
              onClick={handleVisibility}
              type="button"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button> */}
            <button
              className="btn btn-outline-secondary fw-semibold text-light position-fixed bottom-0 end-0 mb-3 me-3"
              onClick={handleVisibility}
              type="button"
            >
              <FontAwesomeIcon icon={faPlus} /> Add Task
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
