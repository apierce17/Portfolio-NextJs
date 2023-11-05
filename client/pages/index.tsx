import Link from "next/link";
import { NextSeo } from "next-seo";
import ProjectsPage from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";
import Hero from "../components/hero";
import { BiChevronDown } from "react-icons/bi";

export default function Home() {

  return (
    <>
    <NextSeo 
      title="Home"
    />
    <Hero/>
    <ProjectsPage/>
    <About/>
    <Contact/>
    </>
  );
}
