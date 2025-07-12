import { experience } from "@/data/experience";
import { DataProject } from "./project";
import AboutMe from "./AboutMe";


const globalData = {
    experience: experience.jobs,
    project: DataProject,
    organisation: AboutMe.organisations,
    certifications: AboutMe.certifications,
}


export default globalData