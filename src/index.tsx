import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { css } from './stitches.config';

css.global({
  html: {
    height: '100%',
  },
  body: {
    height: '100%',
    color: '$text',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    webkitFontSmoothing: 'antialiased',
    fontSize: '16px',
    fontWeight: 300,
    textSizeAdjust: 'none',
  },
  '#root': {
    minHeight: '100%',
    backgroundColor: '$pageBackground',
  },
  'body, div, span, a, p, h1, h2, code': {
    margin: 0,
    border: 0,
    padding: 0,
    boxSizing: 'inherit',
    font: 'inherit',
    fontWeight: 'inherit',
    textDecoration: 'inherit',
    textAlign: 'inherit',
    color: 'inherit',
    background: 'transparent',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
