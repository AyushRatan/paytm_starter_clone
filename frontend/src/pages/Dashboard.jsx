import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";


export function Dashboard(){
    return(
        <div>
            <Appbar></Appbar>
            <Balance label={10000}></Balance>
            <Users></Users>
        </div>
       

    )
}