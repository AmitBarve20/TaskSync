import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont =localFont({
    src:"../public/font/Roboto-Medium.woff",
});


export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-1 hidden md:flex">
        <Image src="/logo.png" alt="logo" height={40} width={40} className="pb-1"></Image>
        <p className={cn(
          "text-lg text-neutral-700 pb-1 ",
          headingFont.className,
        )}> 
        TaskSync
      </p>
        </div>
      
    </Link>
  );
};
