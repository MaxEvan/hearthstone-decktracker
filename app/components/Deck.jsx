import React from 'react'
import DeckCard from './DeckCard.jsx'

class Deck extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'Deck'
    }

    removeCardFromDeck(card) {
        var index = 0
        var deckCards = this.state.deckCards

        deckCards.forEach((item, i) => {
            if(item.name == card.name) {
                index = i
            }
        })

        if(deckCards[index].count > 1) {
            deckCards[index].count -= 1
        } else {
            deckCards.splice(index,1)
        }

        this.setState({
           deckCards: deckCards,
           deckLength: this.state.deckLength - 1
        })
    }

    clearAllCards() {
        this.setState({
            deckCards: [],
            deckLength: 0
        })
    }

    saveDeck() {
        var decks = JSON.parse(localStorage.Decks || "{}")
        decks[this.state.deckName] = {
            deckLength : this.state.deckLength,
            deckClass : this.state.deckClass,
            deckCards : this.state.deckCards
        }

        localStorage.setItem('Decks', JSON.stringify(decks))
        localStorage.setItem('Current', this.state.deckName)
    }

    render() {
        var root = this.props.root

        var cards = root.state.deckCards.map((card, index) => {
            return <DeckCard
                        key={index}
                        background={card.img}
                        name={card.name}
                        manaCost={card.cost}
                        removeCardFromDeck={this.removeCardFromDeck.bind(root, card)}
                        cardCount={card.count}
                    />

        })
    	return  <div className="col-sm-12 col-md-3 deck">
                    <h3>
                        {this.props.deckName}
                        &nbsp;
                        {this.props.length}/30
                        &nbsp;
                        <img className="deckClassImg" src={'img/' + this.props.deckClass + '.png'} title={this.props.deckClass}/>
                    </h3>
                    <button className="btn btn-danger" onClick={this.clearAllCards.bind(root)}>Clear All</button>
                    &nbsp;
                    <button className="btn btn-success" onClick={this.saveDeck.bind(this.props.root)}>Save Deck</button>
                    {cards}
    			</div>

    }
}

export default Deck