export default function Input() {
    return (
        <div className="flex gap-[16px]">
            <input type="text" placeholder="Add a task..." className="w-full inline-block shadow-sm border border-slate-200 rounded-lg h-[40px] p-[16px]" />
            <button className="bg-blue-500 text-white px-[16px] rounded-lg inline-block h-[40px]">Add</button>
        </div>
        );
    }