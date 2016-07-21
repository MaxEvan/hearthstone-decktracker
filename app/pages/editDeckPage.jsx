import {render} from 'react-dom'
import React from 'react'

import '../styles/_editDeckPage.scss'
import 'bootstrap/dist/css/bootstrap.css'

import CardList from '../components/cardList.jsx'
import Deck from '../components/deck.jsx'
import Filters from '../components/filters.jsx'
import Classes from '../components/classes.jsx'

import App from '../classes/app.js'

// Data Mock !!!
import cardsss from './cardsMock.js'

class EditDeckPage extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'EditDeckPage'

        var current = localStorage.Current

// Make sure that when the deck is created on the other page, that the infos are all saved so that this page receives the right properties

        var deck = JSON.parse(localStorage.Decks)[current]
        
        this.state = {
            cards: [],
            listCards: cardsss,
            deckCards: deck.deckCards,
            deckLength: deck.deckLength,
            deckClass: deck.deckClass,
            deckName: current,
            filters: {}
        }
    }

    componentDidMount() {
        var cards = []
        App.getAllCards().then((data) => {
            for(var i in data) {
                data[i].forEach((card) => {
                    if(typeof card.cost != 'undefined' && card.collectible){
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
                        deckName={this.state.deckName}
                    />                      
		    	</div>
    }
}

render(<EditDeckPage />, document.getElementById('app'))