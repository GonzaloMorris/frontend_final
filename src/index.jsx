import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./Components/utils/global.context";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <ContextProvider>
          <App/>
        </ContextProvider>
      </BrowserRouter>
  </React.StrictMode>
);


