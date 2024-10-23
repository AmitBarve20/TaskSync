"use client"

import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";

import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board";
import { FormInput } from "lucide-react";
import { FormSubmit } from "./form-submit";
import React, { Children } from "react";
 
import { number } from "zod";

interface FormPopoverProps{
    childern: React.ReactNode;
    side?: "left "| "right"|"top"| "bottom";

    align?: "start"| "center" |"end";

    sideOffset?: number;

};

export const FormPopover = ({
    childern,
    side = "bottom",
    align,
    sideOffset = 0,

}: FormPopoverProps) => {

    const{execute , fieldErrors} = useAction(createBoard,{
        onSuccess: (data)=>{
            console.log({data});
        },
        onError: (error) =>{
            console.log({error});
        }
            });

            const onSubmit = (formData: FormData) =>{
                const title = formData.get("title") as String;

                execute({title});
            }
    

    return(
        <Popover>
            <PopoverTrigger asChild>
                {childern}
            </PopoverTrigger>
            <PopoverContent
            align = {align}
            className = "w-80 pt-3"
            sideOffset={sideOffset}
               >
                <div className="text-sm font-medium text-center text-neutral-600 pb-4">
                    Create Board
                </div>

                <form className="space-y-4">
                    <div className="space-y-4">
                        <FormInput
                        id ="title"
                        label = "Board title"
                        type="text">
                        </FormInput>
                    </div>
                    <FormSubmit className="w-full">
                        Create
                    </FormSubmit>
                </form>

            </PopoverContent>
        </Popover>
    )
}