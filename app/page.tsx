import Hero from "@/components/Hero";
import Image from "next/image";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition} from "@fortawesome/fontawesome-common-types"
import {FloatingNav} from "@/components/ui/FloatingNav";
import { IconDescriptor } from "next/dist/lib/metadata/types/metadata-types";
import Grid from "@/components/Grid"
import RecentProjects from "@/components/RecentProjects";
import { FaHome } from "react-icons/fa";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="relative bg-[url(/afric10.jpg)] bg-center bg-fixed flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip  text-opacity-100 ">
      <div className="max-w-7xl w-full  ">
        <BackgroundBeams/>
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Clients/>
        <Services/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
