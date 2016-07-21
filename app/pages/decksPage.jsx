import {render} from 'react-dom'
import React from 'react'

import '../styles/_decksPage.scss'
import 'bootstrap/dist/css/bootstrap.css'

import App from '../classes/app.js'

class DecksPage extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'DecksPage'
    }

    render() {
    	return <div></div>
    }
}

render(<DecksPage />, document.getElementById('app'))