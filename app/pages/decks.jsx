import {render} from 'react-dom'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/pages/_decks.scss'

import App from '../classes/app.js'

class Decks extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'Decks'
    }

    render() {
        return  <div className="container">
                    
                </div>
    }
}

render(<Decks />, document.getElementById('app'))