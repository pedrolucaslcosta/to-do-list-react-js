import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons'

export const UpdateTaskForm = ({updateData, updateTask, cancelUpdate, changeTask}) => (
    <div className="input-group mb-3">
        <input 
        value={updateData && updateData.name }
        onChange={ (e) => changeTask(e)}
        type="text" 
        className="form-control bg-dark text-light"  
        placeholder="Edit task" 
        aria-label="Edit task"/>
        <button className="btn btn-warning" onClick={updateTask} type="button"><FontAwesomeIcon icon={faCheck}/></button>
        <button className="btn btn-danger" onClick={cancelUpdate} type="button"><FontAwesomeIcon icon={faXmark}/></button>
    </div>
)