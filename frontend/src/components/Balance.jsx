export function Balance({label}){
    return (
        <div className=" flex px-20 pt-8">
            <div className=" font-bold mr-4 text-lg">Your Balance</div>
            <div className=" font-semibold text-lg">Rs.{label}</div>
        </div>
    )
}