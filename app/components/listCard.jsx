import React from 'react'

class ListCard extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'ListCard'
    }

    render() {
		var style = {
			backgroundImage: 'url(' + this.props.info.img + ')'
		}
    	return  <div className="listCard col-sm-3" style={style} onClick={this.props.addCardToDeck}></div>
    }
}

export default ListCard