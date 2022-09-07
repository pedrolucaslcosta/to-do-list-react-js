import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlus, faXmark} from '@fortawesome/free-solid-svg-icons'

import './App.css';
import '../scss/custom.scss';

import { Task } from './components/Task';
import { UpdateTaskForm } from './components/UpdateTaskForm';
import { AddTaskForm } from './components/AddTaskForm';

function App() {

  // Tasks State
  // --------------------------------------------------
  const [todoList, setTodoList] = useState([
    {id: 1, name: 'Buy milk', status: true},
    {id: 2, name: 'Drink water', status: false},
    {id: 3, name: 'Do homework', status: false}
  ]);

  localStorage.setItem('todoList', JSON.stringify(todoList));
  
  // Temp State
  // --------------------------------------------------
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');
  
  const handleNewTask = (e) => {
    setNewTask(e.target.value);
  };

  const handleUpdateTask = (id) => {
    const task = todoList.filter((task) => task.id == id)
    setUpdateData({
      id: task.id,
      name: task.name,
      status: task.status ? true : false
    })
  }

  // Add task
  // --------------------------------------------------
  const addTask = () => {
    if(newTask) {
      const task = {
        id: todoList.length + 1,
        name: newTask,
        status: false,
      }
      setTodoList([...todoList, task]);
      setNewTask('');
    }
  }
  
  // Delete task
  // --------------------------------------------------
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  // Complete task
  // --------------------------------------------------
  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return {...task, status: !task.status};
        } else {
          return task;
        }
      })
    )  
  }

  // Cancel update
  // --------------------------------------------------
  const cancelUpdate = () => {
    setUpdateData('');
  }

  // Change task for update
  // --------------------------------------------------
  const changeTask = (e) => {
    const task = {
      id: updateData.id,
      name: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(task);
  }

  // Update task
  // --------------------------------------------------
  const updateTask = () => {
    // todoList.filter((task) => task.id !== updateData.id)
    let filter = [...todoList].filter((task) => task.id !== updateData.id)
    let updatedObject = [...filter, updateData]
    setTodoList(updatedObject);
    setUpdateData('');
  }

  return (

    <div className="container App p-0 mt-3">
      <div className="card shadow-lg border-secondary bg-dark text-light col-8 mx-auto">
        <div className="card-body">
          <h5 className="card-title mb-3">To-do List</h5>

          {updateData && updateData ? (

            <UpdateTaskForm
            updateData={updateData}
            cancelUpdate={cancelUpdate}
            changeTask={changeTask}
            updateTask={updateTask}
            />

          ) : (

            <AddTaskForm
            newTask={newTask}
            handleNewTask={handleNewTask}
            addTask={addTask}
            />

          ) }  

          <ul className="list-group">

            {todoList && todoList.length ? '' : 'No tasks...'}
            
            {todoList
            
            // Sort tasks in id order
            .sort((a, b) => a.id > b.id ? 1 : -1)
            
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

                  key={task.id.toString()}
                />
              )
            })}
          </ul>
        </div>
      </div> 
    </div>
  )
}

export default App