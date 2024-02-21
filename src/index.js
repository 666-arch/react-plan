import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './01_不使用Hook/App';
// import App from './02_计数器实现对比/App';
import App from './03_useState的使用/App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
