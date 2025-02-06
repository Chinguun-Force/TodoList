import { useState } from "react"

const TaskList = (props) => {
    console.log(props , "tasklist props")
    const [tasks, setTasks] = useState(props.tasks)
    // console.log(props.setTasks, "tasklist props")
    if (props.tasks.length === 0) {
        return <p className="text-center text-gray-600 mt-[20px]">No tasks yet. Add one above!</p>
    }
    {
        // const toggleTaskCompletion = (index) => {
        //     const clonedTasks = [...props.tasks];
        //     console.log(clonedTasks, "clonedTasks")
        //     clonedTasks[index].isComplete = false;
        //     setTasks(clonedTasks);
        //   };
        const toggleTaskCompletion = (index) => {
            setTasks((prevTasks) =>
                prevTasks.map((task, i) =>
                    i === index ? { ...task, isComplete: !task.isComplete } : task
                )
            );
        };
        return (
            <div>
                {props.tasks.map((task,index) => {
                    return (
                        <div key={task.title + index} className="flex justify-between bg-slate-100 rounded-lg h-[62px] px-[16px] items-center mt-[20px]">
                            <div className="flex gap-[16px] items-center">
                                <input 
                                    type="checkbox"     
                                    className="w-[20px] h-[20px]"
                                    checked={task.isComplete}
                                    onChange={() => toggleTaskCompletion(index)}
                                    />
                                <div className={`${task.isComplete ? 'line-through' : ''}`}>{task.title}</div>
                            </div>
                            <button className="bg-red-50 h-[30px] text-red-500 px-[16px] rounded-lg focus:bg-blue-500 focus:text-white" >Delete</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default TaskList