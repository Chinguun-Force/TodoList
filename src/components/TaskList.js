const TaskList = (props) => {
    console.log(props.setTasks, "tasklist props")
    if (props.tasks.length === 0) {
        return <p className="text-center text-gray-600 mt-[20px]">No tasks yet. Add one above!</p>
    }
    {
        // function deleteTask(index) {
        //     const clonedTasks = props.tasks.filter((_, i) => i !== index)
        //     props.setTasks(clonedTasks)

        // }
        return (
            <div>
                {props.tasks.map((task,index) => {
                    return (
                        <div key={task.title + index} className="flex justify-between bg-slate-100 rounded-lg h-[62px] px-[16px] items-center mt-[20px]">
                            <div className="flex gap-[16px] items-center">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <div className="{}">{task.title}</div>
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