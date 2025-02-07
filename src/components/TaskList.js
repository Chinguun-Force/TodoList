import { useState } from "react"

const TaskList = (props) => {

    const [propsTasks, setPropsTasks] = useState(props.tasks)
    if (props.tasks.length === 0) {
        return <p className="text-center text-gray-600 mt-[20px]">No tasks yet. Add one above!</p>
    }
    {
        function onDelete(task, index) {
            if(confirm('Are you sure you want to delete this task?')) {
                const clonedTask = [...props.tasks]
                let nTask = task.id
                const updatedTasks = clonedTask.filter((randomTask) => nTask !== randomTask.id)
                console.log(updatedTasks)
                props.setTasks(updatedTasks)
            }
        }
        function toggleComplete(event, index) {

            const updatedTasks = [...props.tasks];

            updatedTasks[index].isComplete = event.target.checked

            props.setTasks(updatedTasks)
        }
        return (
            <div>
                {props.tasks.map((task, index) => {
                    console.log(task)
                    return (
                        <div key={task.id} className="flex justify-between bg-slate-100 rounded-lg h-[62px] px-[16px] items-center mt-[20px]">
                            <div className="flex gap-[16px] items-center">
                                <input
                                    type="checkbox"
                                    className="w-[20px] h-[20px]"
                                    // checked={task.isComplete}
                                    onChange={(event) => toggleComplete(event, index)}

                                />
                                <div className={`${task.isComplete ? 'line-through' : ''}`}>{task.title}</div>
                            </div>
                            <button task={task.id}
                                className={`bg-red-50 h-[30px] text-red-500 px-[16px] rounded-lg focus:bg-blue-500 focus:text-white`}
                                onClick={() => onDelete(task, index)}
                            >Delete</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default TaskList

