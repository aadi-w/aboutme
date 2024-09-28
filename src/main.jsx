import { createRoot } from 'react-dom/client'
import * as React from "react";
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)