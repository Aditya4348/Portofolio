import { Route, Routes } from 'react-router-dom';
import HomePage from './page/homePage.tsx';
import '@/style/app.css';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}