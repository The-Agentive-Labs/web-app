import { useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

const HTMLPage = ({ src }) => {
    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <iframe
                src={`/legacy/${src}`}
                title={src}
                style={{ border: 'none', width: '100%', height: '100%' }}
            />
        </div>
    );
};

const RouterHandler = () => {
    const location = useLocation();
    const path = location.pathname.substring(1);

    if (path === '' || path === '/') {
        return <HTMLPage src="index.html" />;
    }

    const src = path.endsWith('.html') ? path : `${path}.html`;
    return <HTMLPage src={src} />;
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<RouterHandler />} />
            </Routes>
        </Router>
    )
}

export default App
