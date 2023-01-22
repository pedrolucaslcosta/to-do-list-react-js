import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

export const AddTaskForm = ({ newTask, addTask, handleNewTask, cancelAdd }) => (
  
  <div class="modal-dialog">
    <div class="modal-content rounded-4">

      <div class="modal-body">
        <form>
          <div class="mb-3">
            <input
              autoFocus
              type="text"
              value={newTask}
              className="form-control bg-transparent border-0"
              onChange={handleNewTask}
              onKeyDown={(e) => {
                if (e.key != null) {
                  console.log(e.key);
                }
                if (e.key === "Enter") {
                  addTask();
                  console.log("Got it");
                }
                if (e.key === "Escape") {
                  cancelAdd();
                }
              }}
              placeholder="Task name"
              aria-label="Task name"
            />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button
          data-bs-dismiss="modal"
          className="btn text-secondary fw-semibold px-3 me-2 rounded-pill"
          type="button"
        >
          Cancel
        </button>
        <button
          className="btn btn-sm btn-primary rounded-pill text-light fw-semibold px-3"
          onClick={addTask}
          type="button"
        // 
        >
          <FontAwesomeIcon icon={faPlus} /> Add task
        </button>
      </div>
    </div>
  </div>
);
