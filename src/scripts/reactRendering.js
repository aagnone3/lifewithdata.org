const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');

class Example extends React.Component {
    render() {
        return React.createElement('div', { className: `theClassName` });
    }
}

console.log(ReactDOMServer.renderToString(React.createElement(
    'h1',
    null,
    'Hello, World'
)));