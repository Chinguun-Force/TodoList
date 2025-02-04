import Status from "./Status";
import TaskList from "./TaskList";

export default function Descr(props) {
    return (
        <div className="">
            <Status />
            <TaskList tasks={props.tasks} />
        </div>
    );
}