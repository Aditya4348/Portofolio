import { BrowserRouter } from 'react-router-dom';
import '@/style/app.css';
import RouteApp from './page/Route/Routes';

export default function App() {
    return (
        <BrowserRouter>
            <RouteApp />
        </BrowserRouter>

    )
}