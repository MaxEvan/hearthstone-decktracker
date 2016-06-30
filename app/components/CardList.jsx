import React from 'react'
import ListCard from './ListCard.jsx'

class CardList extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'CardList'
    }

    addCardToDeck(card) {
        var alreadyInDeck = false;
        var countIndex = 0;
        var costIndex = 0;
        var deckCards = this.state.deckCards

        if(this.state.deckLength < 30) {
            deckCards.forEach((item, i) => {
                if(item.name == card.name) {
                    alreadyInDeck = true
                    countIndex = i
                }
                if(item.cost < card.cost) {
                    costIndex += 1
                }
            })

            if(alreadyInDeck) {
                deckCards[countIndex].count += 1
            } else {
                card.count = 1
                deckCards.splice(costIndex, 0, card)
            }

            this.setState({
                deckCards: deckCards,
                deckLength: this.state.deckLength + 1
            })
        }
    }

    render() {
        var cards = this.props.cards.map((item, index) => {
            return <ListCard key={index} info={item} addCardToDeck={this.addCardToDeck.bind(this.props.root, item)}/>
        })

    	return  <div className="col-sm-12 col-md-9 cardList">
                    {cards}
                </div>
    }
}

export default CardList