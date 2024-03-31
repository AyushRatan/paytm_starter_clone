

export function InputBox({label,placeholder,onChange}){
    return <div>
        <div className=" text-sm text-left font-medium py-2">{label}</div>
        <input className=" w-full px-2 py-1 border rounded border-slate-200 " placeholder={placeholder} onChange={onChange}/>
    </div>
}