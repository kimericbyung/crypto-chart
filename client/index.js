import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App'
// import Chart from './src/Chart'

ReactDOM.render(<App btcHTML='https://api.coindesk.com/v1/bpi/historical/close.json' />, document.getElementById('app'));