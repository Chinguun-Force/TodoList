import { useState } from "react";

export default function Input(props) {
    let [ inputValue, setInputValue ] = useState('');
    const origin = ""
    const onChange = (event) => {
        setInputValue(event.target.value)
        console.log(event.target)
    }
    const onSubmit = () => {
        props.setTasks((prevTasks) => {
            return [...prevTasks, {title: inputValue}]
        })
        setInputValue(origin)

    }
    return (
        <div className="flex gap-[16px]">
            <input type="text" placeholder="Add a task..." value={inputValue} className="w-full inline-block shadow-sm border border-slate-200 rounded-lg h-[40px] p-[16px]" onChange={onChange}/>
            <button className="bg-blue-500 text-white px-[16px] rounded-lg inline-block h-[40px]" onClick={onSubmit}>Add</button>
        </div>
        );
    }