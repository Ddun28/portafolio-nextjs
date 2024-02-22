import Container from "@/components/shared/ui/container";
import Header from "./sections/header";
import { Metadata } from "next";
import SectionMyRole from "./sections/section-my-role";
import SectionTheProject from "./sections/section-the-project";

export const metadata: Metadata = {
    title: "Work details",
    description: "Work details",
  };

const WorkDetails = () => {
    return ( 
    <main>
        <Header/>
        <SectionMyRole/>
        <SectionTheProject/>
    </main> );
}
 
export default WorkDetails;