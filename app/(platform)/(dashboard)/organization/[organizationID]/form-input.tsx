"use client"

import {Input} from "@/components/ui/input"
import { useFormStatus } from "react-dom";
interface FormInputProps{
    errors?:{
        title?:string[];
    }
}

export const FormInput = ({ errors} : FormInputProps ) =>{
    const {pending} = useFormStatus();


    return (
        
        <div>
        <form>
        <Input
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        disabled={pending}
        />

        </form>
         </div>
        
    );
};

