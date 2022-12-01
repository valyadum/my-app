import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Andrew" },
  { id: 3, name: "Sasha" },
  { id: 4, name: "Victor" },
  { id: 5, name: "Valera" },
];
let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "I'm fine thanks"},
  { id: 4, message: "yo" },
  { id: 5, message: "yo" },
];
let posts = [
  { id: 1, message: "Hi, how are you?", like: "43" },
  { id: 2, message: "It's my first post", like: "98" },
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
