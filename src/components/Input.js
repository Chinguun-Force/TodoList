import { useState } from "react";

export default function Input(props) {
    function generateUniqueId() {
        // Get current time in milliseconds
        const timestamp = Date.now();
    
        // Generate a random 6-character string
        const randomStr = Math.random().toString(36).substring(2, 8);
    
        // Combine both to form a unique ID
        const uniqueId = `${timestamp}-${randomStr}`;
    
        return uniqueId;
    }
    
    // Example usage
    const uniqueId = generateUniqueId();


    let [ inputValue, setInputValue ] = useState('');
    const origin = ""
    const onChange = (event) => {
        setInputValue(event.target.value)
        // console.log(event.target)
    }
    const onSubmit = () => {
        props.setTasks((prevTasks) => {
            return [{
                title: inputValue,
                isComplete: false,
                id : uniqueId
            },...prevTasks]
        })
        setInputValue(origin)
    }
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            onSubmit()
        }
    }
    return (
        <div className="flex gap-[16px]">
            <input 
            type="text" 
            placeholder="Add a task..." 
            value={inputValue} 
            className="w-full inline-block shadow-sm border border-slate-200 rounded-lg h-[40px] p-[16px]" 
            onChange={onChange}
            onKeyDown={handleKeyDown}
            />
            <button className="bg-blue-500 text-white px-[16px] rounded-lg inline-block h-[40px]" onClick={onSubmit}>Add</button>
        </div>
        );
    }