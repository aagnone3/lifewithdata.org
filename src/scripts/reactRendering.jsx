const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');

class Example extends React.Component {
    render() {
        return (
            <>
                <table dangerouslySetInnerHTML></table>
                <div className={`theClassName`} />
            </>
        )
    }
}

console.log(ReactDOMServer.renderToString(
    <h1>Hello, World</h1>
))

// 1) npx babel --presets react src/scripts/reactRendering.jsx
// 2) node src/scripts/reactRendering.js > file.html
