import { Heading } from "../components/Heading"
import { Button } from "../components/Button"

export function SendMoney(){
    return (
        <div className=" h-screen bg-slate-200 flex justify-center">
            <div className="flex flex-col justify-center">
            <div
                class="border h-min text-card-foreground p-4 w-96  bg-white shadow-lg rounded-lg px-10"
            >
                    <div className="text-center"><Heading label={"Send Money"}></Heading></div>
                    <div className="flex pt-20">
                        <div className=" text-lg w-10 h-10 rounded-full bg-green-500 flex flex-col justify-center text-center font-bold mr-4">A</div>
                        <div className=" text-2xl flex flex-col justify-center font-bold">Friends Name</div>
                    </div>
                    <div className="text-md pt-4 text-left pb-2">Amount (in Rs.)</div>
                    <input placeholder="Enter Amount" className="w-full px-2 py-1 border rounded border-slate-200" />
                    <Button label={"Send"}></Button>
                </div>
            </div>
        </div>
    )
}