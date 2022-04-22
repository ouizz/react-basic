import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import './styles/custom.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={'/reactapiweb'}>
        { Routes }
    </Router>
  </React.StrictMode>
);
