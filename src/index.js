import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {StoreProvider} from 'easy-peasy';
import store from './Store';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
<React.StrictMode>
  <StoreProvider store={store}>
  <Router>
    <Routes>
      <Route path="/*" element={<App/>} />
    </Routes>
  </Router>
  </StoreProvider>
</React.StrictMode>,
);