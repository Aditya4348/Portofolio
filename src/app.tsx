import { BrowserRouter } from 'react-router-dom';
import '@/style/app.css';
import RouteApp from './page/Route/Routes';
import { MinimalNavbar } from './components/ui/minimal_Navbar';

export default function App() {
    return (
        <BrowserRouter>
            <MinimalNavbar />
            <RouteApp />
        </BrowserRouter>

    )
}