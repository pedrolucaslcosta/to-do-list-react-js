import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons'

export const Task = (props) => (
  <li className="list-group-item list-group-item-action border-secondary bg-dark text-light d-flex justify-content-between align-items-center">
    <div>
      <input className="form-check-input bg-dark border-secondary me-2" type="checkbox" defaultChecked={props.status ? 'checked' : ''} onChange={(e) => props.completeTask(props.id)}></input>
      
      <label className={props.status ? "form-label me-2 text-muted text-decoration-line-through" : 'form-label me-2'}>{props.name}</label>
    </div>
    <div>

      {/* If Status is completed, hide edit button */}
      {props.status ? null : (
        <button 
        title='Edit task' 
        className="btn btn-sm bg-transparent text-secondary" type='button' 
        onClick={ () => props.setUpdateData({
          id: props.id,
          name: props.name,
          status: props.status ? true : false
        })}>
          <FontAwesomeIcon icon={faPen} />
        </button>
      )}

      <button title='Delete task' className="btn btn-sm bg-transparent text-secondary" type='button' onClick={() => props.deleteTask(props.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
    </div>
  </li>
)