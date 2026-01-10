import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import ProjetoDetails from './components/ProjectDetails.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route index path="/" element={<App />} />
            <Route path="/project">
                <Route path="/project/:id" element={<ProjetoDetails />} />
            </Route>
        </Routes>
    </BrowserRouter>,
);
