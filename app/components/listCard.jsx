import React from 'react'

export default class ListCard extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'ListCard'
    }

    render() {
        var style = {
            backgroundImage: 'url(' + this.props.info.img + ')'
        }
        return  <div className="card col-sm-3" style={style} onClick={this.props.addCardToDeck}></div>
    }
}
