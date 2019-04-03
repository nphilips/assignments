import React from 'react'
import ReactDOM from "react-dom"
// import App from "./1-use-state-examples/App.js"
// import App from "./2-use-effect-examples/App.js"
// import App from "./3-use-context-examples/App.js"
// import DataProvider from './3-use-context-example/context/DataProvider.js'
import App from "./4-use-custom-hooks/App.js"



ReactDOM.render(
<DataProvider>
    <App/>
</DataProvider>, document.getElementById('root'))