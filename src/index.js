import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CustomComponent from './CustomComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CustomComponent />, document.getElementById('root'));
registerServiceWorker();
