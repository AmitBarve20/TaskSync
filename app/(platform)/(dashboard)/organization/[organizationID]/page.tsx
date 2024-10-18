// import { OrganizationSwitcher} from "@clerk/nextjs";
// import { auth } from "@clerk/nextjs/server";

import { Navbar } from "../../_components/navbar";

import TaskBoard from "@/app/(platform)/(dashboard)/organization/[organizationID]/TaskBoard";
import BoardApp from "@/app/(platform)/(dashboard)/organization/[organizationID]/BoardApp";
import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { Board } from "./board";
import { Form } from "./form";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <Form />
      <div className="space-y-2">
        {boards.map((board) => (
          <Board key={board.id} title={board.title} id={board.id}/>
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
