import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { HomeProvider } from './store/HomeContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomeProvider>
      <App />
    </HomeProvider>
  </React.StrictMode>,
);