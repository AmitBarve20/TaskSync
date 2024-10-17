// import { OrganizationSwitcher} from "@clerk/nextjs";
// import { auth } from "@clerk/nextjs/server";

import { Navbar } from "../../_components/navbar";

import TaskBoard from "@/app/(platform)/(dashboard)/organization/[organizationID]/TaskBoard"
import BoardApp from "@/app/(platform)/(dashboard)/organization/[organizationID]/BoardApp"
import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";



const OrganizationIdPage = () => {
    return (
        
        <div>
        <form action={create}>
        <input
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        className="border-black border p-1"
        />
        <Button type="submit"> Submit</Button>
        </form>
         </div>
        
    );
};

export default OrganizationIdPage;