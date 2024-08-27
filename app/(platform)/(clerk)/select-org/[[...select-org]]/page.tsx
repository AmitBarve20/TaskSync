import { OrganizationList } from "@clerk/nextjs";

export default function CreateOraganizationPage(){
    return (
        <OrganizationList 
        
        hidePersonal
        afterSelectOrganizationUrl="/organization/:id"
        afterCreateOrganizationUrl="/organization/:id"/>
    );
};