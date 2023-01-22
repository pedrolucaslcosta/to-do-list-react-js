import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

export const UpdateTaskForm = ({updateData, updateTask, cancelUpdate, changeTask}) => (
    <li className="list-group-item list-group-item-action rounded-4 ps-1 my-2 border d-flex justify-content-between align-items-center">
      
    <div className="d-flex justify-content-between">

      <div class="input-group flex-nowrap">
        <input 
            autoFocus
            // style={{backgroundColor: '#222'}}
            value={updateData && updateData.name }
            onChange={ (e) => changeTask(e)}
            type="text" 
            className="form-control border-0 border-secondary"  
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
        
        
      </div>
      
      <div className='d-flex gap-2'>
      <button className="btn btn-sm text-secondary rounded-pill fw-semibold" onClick={cancelUpdate} type="button">Cancel</button>
        <button className="btn btn-sm btn-primary rounded-pill fw-semibold px-3" onClick={updateTask} type="button">Save</button>
        
      </div>

      </li>
)