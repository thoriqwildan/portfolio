import { projectsData } from "../lib/projects-data";
import { HoverEffect } from "./card-hover-effect";

export default function Projects() {
    return (
        <div id="projects" className="w-full h-auto px-3 md:px-32 my-5">
            <div className="w-full md:p-10">
                <p className="text-2xl text-white text-center">My Projects</p>
                <HoverEffect items={projectsData}/>
            </div>
        </div>
    )
}