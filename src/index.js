import React from 'react';
import ReactDOM from 'react-dom';
import DocumentTitle from 'react-document-title';
import App from './components/App';
import './style/index.css';
import registerServiceWorker from './util/registerServiceWorker';

ReactDOM.render(
  <DocumentTitle title="Color Splash">
    <App />
  </DocumentTitle>,
  document.getElementById('root')
);
registerServiceWorker();
