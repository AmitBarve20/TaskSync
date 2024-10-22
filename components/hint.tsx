import { Description } from "@radix-ui/react-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Children, ReactNode } from "react";

interface HintProps {
  Children: React.ReactNode;
  Description: string;
  Side?: "left" | "right" | "top" | "bottom";
  SideOffSet?: number;
}

export const Hint = ({
  Children,
  Description,
  Side = "bottom",
  SideOffSet = 0,
}: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger>
            {Children}
        </TooltipTrigger>
        <TooltipContent 
        sideOffset={SideOffSet}
        side={Side}
        className="text-xs max-w-[220px] break-words" >
            {Description}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
