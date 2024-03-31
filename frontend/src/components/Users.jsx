import { useState } from "react";
import { Button } from "./Button";
import { InputBox } from "./InputBox";


export function Users(){
    const [users,setUsers] = useState([{
        firstname:"Ayush",
        lastanme:"Ratan",
        _id:1
    }])


    return(
        <div className="px-20 pt-8">
            <div className=" font-bold text-lg">
                Users
            </div>
            <input className=" w-full px-2 py-1 border rounded border-slate-400 mt-2" placeholder="Search Users..."/>
            {
                users.map(user => (<User user={user} />))
            }
        </div>
    )
}


function User({user}){
    return (
        <div className="flex justify-between pt-4">
            <div className="flex items-center">
                <div className="rounded-full bg-violet-300 w-10 h-10 text-center flex flex-col justify-center mr-2">A</div>
                <div className="flex flex-col justify-center">{user.firstname}</div>
            </div>
            <div className=""><Button label={"Send Money"}></Button></div>
        </div>
    )
}