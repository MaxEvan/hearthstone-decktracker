import {render} from 'react-dom'
import React from 'react'

import '../styles/_main.scss'
import 'bootstrap/dist/css/bootstrap.css'

import CardList from '../components/CardList.jsx'
import Deck from '../components/Deck.jsx'
import Filters from '../components/Filters.jsx'
import Classes from '../components/Classes.jsx'

import App from '../classes/App.js'

// Data Mock !!!
import cardsss from './cardsMock.js'

class CardsPage extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'CardsPage'
        this.state = {
            cards: [],
            listCards: cardsss,
            deckCards: [],
            deckLength: 0,
            deckClass: 'druid',
            filters: {}
        }
    }

    componentDidMount() {
        var cards = []
        App.getAllCards().then((data) => {
            for(var i in data) {
                data[i].forEach((card) => {
                    if(card.cost && card.collectible){
                        cards.push(card)
                    }
                })
            }
            this.setState({
                cards: cards
            })
        })
    }

    render() {
    	return <div className="container">
                    <Filters root={this}/>
		    		<CardList
                        root={this}
                        cards={this.state.listCards}
                    />
		    		<Deck 
                        root={this} 
                        cards={this.state.deckCards}
                        length={this.state.deckLength}
                        deckClass={this.state.deckClass}
                    />                      
		    	</div>
    }
}

render(<CardsPage/>, document.getElementById('app'))