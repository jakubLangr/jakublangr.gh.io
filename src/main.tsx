import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('🔧 Vite config loaded - Base URL:', import.meta.env.BASE_URL);
console.log('🏠 Current location:', window.location.href);

createRoot(document.getElementById("root")!).render(<App />);
