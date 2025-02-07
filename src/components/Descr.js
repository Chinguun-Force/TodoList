import Status from "./Status";
import TaskList from "./TaskList";

export default function Descr(props) {
    console.log(props.tasks, "descr props")
    return (
        <div className="">
            <Status tasks={props.tasks} setTasks={props.setTasks} />
            <TaskList tasks={props.tasks} setTasks={props.setTasks} />
        </div>
    );
}