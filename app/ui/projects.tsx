import { projectsData } from "../lib/projects-data";
import { HoverEffect } from "./card-hover-effect";

export default function Projects() {
    return (
        <div id="projects" className="w-full h-auto px-3 md:px-1 lg:px-32 my-5">
            <div className="w-full md:py-10 md:px-[10%] lg:px-[10%]">
                <p className="text-2xl dark:text-white text-center">My Projects</p>
                <HoverEffect items={projectsData}/>
            </div>
        </div>
    )
}