import { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    }, 
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 8:30am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Grocery Shopping',
        day: 'Feb 7th at 9:30am',
        reminder: false,
    }
])

// Add task
const addTask = (task) => {
  console.log(task)
}

// Delete a task 
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder: 
    !task.reminder} : task
    )
  )
}

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder} />
      ) : ('No Task to show'
      )}
    </div>
  );
}

export default App;
