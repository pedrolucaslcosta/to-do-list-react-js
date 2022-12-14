import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const UpdateTaskForm = ({updateData, updateTask, cancelUpdate, changeTask}) => (
    <li className="list-group-item list-group-item-action border-secondary bg-dark text-light d-flex justify-content-between align-items-center">

    <div className="d-flex justify-content-between">
        <input 
            value={updateData && updateData.name }
            onChange={ (e) => changeTask(e)}
            type="text" 
            className="form-control bg-dark text-light border-secondary"  
            placeholder="Edit task" 
            aria-label="Edit task"
            onKeyPress={
            (e) => {
                if (e.key === "Enter") {
                updateTask()
                console.log('Got it')
                }
            }
            }
        />
        
        
      </div>
      
      <div className='d-flex gap-1'>
        <button className="btn btn-primary" onClick={updateTask} type="button"><FontAwesomeIcon icon={faCheck}/></button>
        <button className="btn btn-outline-secondary" onClick={cancelUpdate} type="button">Cancel</button>
      </div>

      </li>
)