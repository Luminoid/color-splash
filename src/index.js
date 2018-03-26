import React from 'react';
import ReactDOM from 'react-dom';
import DocumentTitle from 'react-document-title';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <DocumentTitle title='Color Splash'>
        <App />
    </DocumentTitle>,
    document.getElementById('root')
);
registerServiceWorker();
