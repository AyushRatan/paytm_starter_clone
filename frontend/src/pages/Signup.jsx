import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"

export function Signup(){
    return (

        <div className="bg-slate-400 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-100 text-center p-2 h-max px-6">
                    <Heading label={"Sign Up"}></Heading>
                    <SubHeading label={"Enter your credentials to create account"}></SubHeading>
                    <InputBox label={"First Name"} placeholder={"Ayush"}></InputBox>
                    <InputBox label={"Last Name"} placeholder={"Ratan"}></InputBox>
                    <InputBox label={"Email"} placeholder={"ayushratan.974@gmail.com"}></InputBox>
                    <InputBox label={"Password"} placeholder={"password"}></InputBox>
                    <Button label={"Sign In"}></Button>
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign In"} goto={"/signin"}></BottomWarning>

                </div>
            </div>
        </div>
    )
}