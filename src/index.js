import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));


root.render(<App />);
root2.render(<App2 />);