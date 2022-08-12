import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import StateProvider from './context/StateProvider';
import reducer, { initialState } from './context/reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
