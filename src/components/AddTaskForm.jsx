import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const AddTaskForm = ({newTask, addTask, handleNewTask}) => (
    <div className="d-flex mb-3">
        <input 
            type="text" 
            value={newTask} 
            className="form-control bg-dark text-light border-secondary" 
            onChange={handleNewTask} 
            onKeyPress={
                (e) => {
                    if (e.key === "Enter") {
                      addTask()
                      console.log('Got it')
                    }
                  }
            }
            placeholder="Task name" 
            aria-label="Task name"
        />
        
        <button className="btn btn-primary rounded-circle ms-3" onClick={addTask} type="button"><FontAwesomeIcon icon={faPlus}/></button>
    </div>
)