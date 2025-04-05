import Header from "@/componetnts/aboutus/header";
import DescT from "@/componetnts/projects/eachTopic";
import Navbar from "@/componetnts/projects/navbar";
import MyContext from "@/context";
import allProjects from "@/project";
import { useContext, useEffect, useState } from "react";

function Projects() {
    const {projectLink} = useContext(MyContext)
    const [project , setProject] = useState({})

    useEffect(() => {
        const find = allProjects.find((item) => item.link === projectLink)
        setProject(find)
    } , [projectLink])

    return (
        <div className=" w-[100vw] flex flex-col items-center">
            <Header/>
            <Navbar />
            <DescT item={project}/>
        </div>
    );
}

export default Projects;