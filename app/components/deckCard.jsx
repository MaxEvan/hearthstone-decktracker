import React from 'react'

export default class DeckCard extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'DeckCard'
    }

    render() {
        var thumbImg = {
            backgroundImage: 'url(' + this.props.background + ')'
        }

        return  <div onClick={this.props.removeCardFromDeck} className="col-sm-12 card">
                    <span className="manaCrystal">
                        <span className="manaCost">{this.props.manaCost}</span>
                    </span>
                    <span className="cardName">{this.props.name}</span>
                    <span style={thumbImg} className="cardThumb"></span>
                    <span className="cardCount">{this.props.cardCount}</span>
                </div>
    }
}