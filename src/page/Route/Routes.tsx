import { Route, Routes } from "react-router-dom";
import HomePage from "../homePage";

export default function RouteApp() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}