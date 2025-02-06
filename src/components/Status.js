export default function Status() {
    const status = ["All", "Active", "Completed"]
    return (
        <div className="*:h-[40px] flex gap-[6px] *:px-[16px] *:rounded-lg ">
            {status.map((status, index) => (
                <button key={index} className="bg-slate-100 focus:bg-blue-500 focus:text-white">{status}</button>
            ))}
        </div>
    )
}