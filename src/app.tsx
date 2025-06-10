import { BrowserRouter } from 'react-router-dom';
import '@/style/app.css';
import RouteApp from './page/Route/Routes';
import { MinimalNavbar } from './components/ui/minimal_Navbar';
import { footer } from './data/footer';
import FooterSection from './components/temp/FooterSection';

export default function App() {
    return (
        <BrowserRouter>
            <MinimalNavbar />
            <RouteApp />
            {/* Footer */}
            <FooterSection {...footer} />
        </BrowserRouter>

    )
}