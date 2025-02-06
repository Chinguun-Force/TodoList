import Status from "./Status";
import TaskList from "./TaskList";

export default function Descr(props) {
    console.log(props.setTask, "descr props")
    return (
        <div className="">
            <Status />
            <TaskList tasks={props.tasks} setTask = {props.setTasks}/>
        </div>
    );
}