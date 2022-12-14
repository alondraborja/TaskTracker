import { useState } from "react"

const AddTask = ({onAdd}) => {
  const [text,setText] = useState('')
  const [day,setDay] = useState('')
  const [reminder,setReminder] = useState(false)  

  return (
    <form className="add-form"
        onSubmit={onSubmit}
    >
        <div className="form-control">
            <label>Task</label>
            <input type="text" 
                placeholder="Add task"
                value={text}
                onChange={(e) => setText(e.target.value
                )}
            />
        </div>
        <div className="form-control">
            <label>Date & Time</label>
            <input type="text" 
                placeholder="Add day & time"
                value={day}
                onChange={(e) => setDay(e.target.value
                )}
            />
        </div>
        <div className="form-control form-control-check">
            <label>Set reminder</label>
            <input type="checkbox"
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked
                )}
            />
        </div>

        <input className="btn btn-block" type="submit" value="Save Task"/>
    </form>
  )
}

export default AddTask