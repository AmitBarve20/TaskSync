import Link from "next/link";
import localfont from "next/font/local";
import { Medal } from "lucide-react";
import {cn} from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont =localfont({
  src: "../../public/font/Roboto-Medium.woff"
}); 

const MarketingPage=()=>{
  return(
    <div className="flex items-center justify-center flex-col" > 
    <div className={cn(
      "flex items-center justify-center flex-col",
      headingFont.className
      )}>
    <div className="mb-4 flex items-centre board shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase"> 
      <Medal className="h-6 w-6 mr-2"/>
      No 1 Task management 
    </div>
    <h1 className=" text-3xl md:text-6xl text-centre text-neutral-800 mb-6"> Taskify help team move</h1>
    <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit"> work forward</div>
    </div>
    <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs ms:max-w-2xl text-centre mx-auto">
    Organize, Prioritize, Achieve!
    </div>
    <div className="text-sm md:text-xl max-w-md text-center mt-2"> Taskify is a powerful task management tool designed for businesses to streamline workflows, boost productivity, and foster collaboration. </div>
    <Button className="mt-6" size="lg" asChild>
      <Link href="sign-in">get taskify for free </Link>
    </Button>
    </div>
  );
};


export default MarketingPage;