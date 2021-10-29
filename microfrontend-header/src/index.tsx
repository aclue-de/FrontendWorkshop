import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const WRAPPER_DOM_ID = 'osc'

if (!document.getElementById(WRAPPER_DOM_ID)) {
    const divNode = document.createElement('div')
    divNode.id = WRAPPER_DOM_ID
    document.body.prepend(divNode)
}

// safe children for later use
const intermediateDiv = document.createElement('div')
const oldParent = document.getElementById(WRAPPER_DOM_ID)!
while (oldParent.childNodes.length > 0) {
    intermediateDiv.appendChild(oldParent.childNodes[0])
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="osc-container">
      <div id={'osc-vertical'} className="osc-vertical" />
    </div>
  </React.StrictMode>,
  document.getElementById(WRAPPER_DOM_ID)
);

// re-append children from index.html to rendered portal frame
const newParent = document.getElementById('osc-vertical')!
while (intermediateDiv.childNodes.length > 0) {
    newParent.appendChild(intermediateDiv.childNodes[0])
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
