import { Route, Routes } from "react-router-dom";
import HomePage from "../homePage";
import AboutPage from "../aboutPage";
import ExperiencePage from "../experiencePage";
import ProjectPage from "../projectPage";
import { AnimatePresence } from "framer-motion";
import DetailPage from "@/components/temp/DetailPage";

export default function RouteApp() {
    return (
        <AnimatePresence mode="wait">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/detail/:category/:id" element={<DetailPage />} />
            </Routes>
        </AnimatePresence>
    )
}