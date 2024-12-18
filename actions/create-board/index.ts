"use server";

import { auth } from "@clerk/nextjs/server";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-actions";
import { CreateBoard } from "./schema";


const handler = async (data: InputType): Promise<ReturnType> => {
const { userId, orgId } = auth();
if (!userId || !orgId ) {
return {
error: "Unauthorized",
};
}

const {title, image} = data;

const [
    imageId,
    imageThumbUrl,
    imageFullUrl,
    imageLinkHTML,
    imageUserName
] = image.split("|")

console.log({
    imageId,
    imageThumbUrl,
    imageFullUrl,
    imageLinkHTML,
    imageUserName
})

if (!imageId || !imageFullUrl || !imageLinkHTML || imageThumbUrl || imageUserName){
    return{
        error: "Missisng Fields. Failed To Create Board."
    }
}


let board ; 

try {
    board = await db.board.create({
        data: {
            title,
            orgId,
            imageId,
            imageThumbUrl,
            imageFullUrl,
            imageUserName,
            imageLinkHTML,

        }
    });
}
catch (error) {
    return { 
        error : "failed to create"
    }
}

revalidatePath (`/board/${board.id}`);

return {data : board };
};


export const createBoard = createSafeAction(CreateBoard, handler);