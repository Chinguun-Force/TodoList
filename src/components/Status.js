export default function Status() {
    return (
            <div className="*:h-[40px] flex gap-[6px] *:px-[16px] *:rounded-lg ">
                <button className="bg-slate-100 focus:bg-blue-500 focus:text-white">All</button>
                <button className="bg-slate-100 focus:bg-blue-500 focus:text-white">Active</button>
                <button className="bg-slate-100 focus:bg-blue-500 focus:text-white">Completed</button>
            </div>
    )
}