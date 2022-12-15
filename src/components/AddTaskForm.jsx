import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const AddTaskForm = ({newTask, addTask, handleNewTask, cancelAdd}) => (
    <div className='card bg-dark border-secondary pb-2 pe-2'>
    <div className="d-flex  rounded border-secondary mb-2 justify-content-between align-items-center">
        <input 
            autoFocus
            type="text" 
            value={newTask} 
            className="form-control bg-transparent text-light border-0" 
            onChange={handleNewTask}
            onKeyDown={
                (e) => {
                    if (e.key != null) {
                        console.log(e.key);
                    }
                    if (e.key === "Enter") {
                      addTask()
                      console.log('Got it')
                    }
                    if (e.key === "Escape") {
                        cancelAdd();
                      }
                  }
            }
            placeholder="Task name" 
            aria-label="Task name"
        />
        
        {/* <button className="btn btn-sm bg-transparent btn-secondary" onClick={addTask} type="button"><FontAwesomeIcon icon={faPlus}/></button> */}
    </div>
    <div className='d-flex justify-content-end'>
    <button className="btn btn-sm btn-outline-secondary fw-semibold me-2 text-light" onClick={cancelAdd} type="button">Cancel</button>
    <button className="btn btn-sm btn-primary fw-semibold" onClick={addTask} type="button">Add task</button>
    
    </div>
    
    </div>
)