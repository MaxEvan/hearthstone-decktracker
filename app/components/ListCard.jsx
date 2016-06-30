import React from 'react'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'Card'
    }

    render() {
		var style = {
			backgroundImage: 'url(' + this.props.info.img + ')'
		}
    	return  <div className="listCard col-sm-3" style={style} onClick={this.props.addCardToDeck}></div>
    }
}

export default Card