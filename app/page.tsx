import Navbar from "@/app/(components)/(navbar)/navbar";
import LandingLayout from "@/app/(components)/(landing)/layout";
import Skills from "@/app/(components)/(skills)/skills";
import Projects from "@/app/(components)/(projects)/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingLayout />
      <Skills />
      <Projects />
    </>
  );
}
