import React from 'react'

class Filters extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'Filters'
        this.state = {
            name : '',
            cost : 'all'
        }
    }

    changeCost(event) {
        this.setState({
            cost: event.target.value
        })
    }

    changeName(event) {
        this.setState({
            name : event.target.value
        })
    }

    searchCards(event) {
        event.preventDefault()
        var cards = this.props.root.state.cards.filter((item) => {
            let check
            let checkString = item.name.toLowerCase().replace(/\'/, '').indexOf(this.state.name.toLowerCase().replace(/\'/, '')) > -1
            let checkCost = item.cost == this.state.cost

            // Check both cost and name
            if(this.state.cost !== 'all' && this.state.name !== '') {
                check = (checkCost && checkString)
            }
            // Only check cost
            else if(this.state.cost !== 'all') {
                console.log(this.state.cost)
                console.log(item.cost)
                check = checkCost
            }
            // Only check name
            else {
                check = checkString
            }
            return check
        })

        this.props.root.setState({
            listCards : cards
        })
    }

    clearFilters() {
        this.setState({
            name : '',
            cost : 'all'
        })
        
        this.props.root.setState({
            listCards : []
        })
    }

    render() {
    	var costs = ['all',0,1,2,3,4,5,6,7,8,9,10].map( (item,index) => <option key={index} value={item}>{item}</option>)
        return 	<form onSubmit={this.searchCards.bind(this)}>
        			<div className="col-md-3">
	        			<span>Name</span>
        				<input className="form-control" style={{color: "black"}} value={this.state.name} type="text" onChange={this.changeName.bind(this)}/>
        			</div>
        			<div className="col-md-1">
	        			<span>Cost</span>
	        			<select className="form-control" name="cost" value={this.state.cost} onChange={this.changeCost.bind(this)}>
	        				{costs}
	        			</select>
	        		</div>
        			<div className="col-md-1">
        				<br/>
	        			<button type="submit" className="btn btn-default">Search</button>
	        		</div>
                    <div className="col-md-1">
                        <br/>
                        <button className="btn btn-warning" onClick={this.clearFilters.bind(this)}>Clear Filters</button>
                    </div>
        		</form>
    }
}

export default Filters