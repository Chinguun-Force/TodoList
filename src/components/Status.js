export default function Status() {
    const status = "All"
    return (
        <div className="*:h-[40px] flex gap-[6px] *:px-[16px] *:rounded-lg ">
                <button key={index} className="bg-slate-100 focus:bg-blue-500 focus:text-white">All</button>
                <button key={index} className="bg-slate-100 focus:bg-blue-500 focus:text-white">Active</button>
                <button key={index} className="bg-slate-100 focus:bg-blue-500 focus:text-white">Completed</button>
        </div>
    )
}