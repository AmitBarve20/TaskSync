// import { OrganizationSwitcher} from "@clerk/nextjs";
// import { auth } from "@clerk/nextjs/server";

import { Navbar } from "../../_components/navbar";
import {db } from "@/lib/db"
import TaskBoard from "@/app/(platform)/(dashboard)/organization/[organizationID]/TaskBoard"
import BoardApp from "@/app/(platform)/(dashboard)/organization/[organizationID]/BoardApp"


const OrganizationIdPage=() =>{

    async function create(formData: FormData) {
        "use server";

        const title = formData.get("title") as string

        await db.board.create({
            data:{
                title,
            }
        })
    }


    return (
        <>
        {/* <div>
        <form action={create}>
        <input
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        className="border-black border p-1"
        />
        </form>
         </div> */}
        
         {/* <TaskBoard/> */}

         <div style={{backgroundColor: '#c6daf8',}}>
            <BoardApp/>

         </div>
         
        </>
    );
};

export default OrganizationIdPage;