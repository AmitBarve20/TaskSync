"use client";

import { useRouter , usePathname} from "next/navigation";
import {
  Activity,
  CreditCard,
  Layout,
  Settings,
}  from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}

export const NavItems = ({
  isExpanded,
  isActive,
  organization,
  onExpand,
}: NavItemProps) => {
  const router = useRouter();

  const pathname = usePathname();
  const routes =[
    {
      label: "Boards",
      icon : <Layout className="h-4 w-4 mr-2"/>,
      href : '/organization/${organization.id}',
    },
    {
      label: "Activity",
      icon : <Activity className="h-4 w-4 mr-2"/>,
      href : '/organization/${organization.id}/activity',
    },
    {
      label: "Settings",
      icon : <Settings className="h-4 w-4 mr-2"/>,
      href : '/organization/${organization.id}/settings',
    }
    ,
    {
      label: "Billing",
      icon : <CreditCard className="h-4 w-4 mr-2"/>,
      href : '/organization/${organization.id}/billing',
    }

  ];

  const onClick = (href: string) =>{
    router.push(href);
  }
  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
          isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image
              fill
              src={organization.imageUrl}
              alt={`${organization.name} logo`}
              className="rounded-sm object-cover"
            />
          </div>
          <span>{organization.name}</span>
        </div>
      </AccordionTrigger>

      {/* Optionally, you can add content to display when the accordion expands */}
      {isExpanded && (
        <AccordionContent className="pt-1 text-neutral-700">
          {routes.map((route)=>(
            <Button 
            key={route.href}
            size="sm"
            onClick={()=>onClick(route.href)}
            className={cn()}
            ></Button>
          ))}
        </AccordionContent>
      )}
    </AccordionItem>
  );
};
