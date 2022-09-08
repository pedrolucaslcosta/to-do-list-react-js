import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const AddTaskForm = ({newTask, addTask, handleNewTask}) => (
    <div className="input-group mb-3">
        <input type="text" value={newTask} className="form-control bg-dark text-light border-secondary" onChange={handleNewTask} placeholder="Task name" aria-label="Task name"/>
        <button className="btn btn-primary" onClick={addTask} type="button"><FontAwesomeIcon icon={faPlus}/></button>
    </div>
)