import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import { LoaderProvider } from './context/LoaderContext.tsx';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoaderProvider>
    <App />
    </LoaderProvider>
  </React.StrictMode>,
)
