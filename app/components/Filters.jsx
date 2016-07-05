import React from 'react'

class Filters extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'Filters'
    }

    render() {
    	var costs = [0,1,2,3,4,5,6,7,8,9,10].map(item => <option>{item}</option>)
        return 	<form>
        			<div className="col-md-3">
	        			<span>Name</span>
        				<input className="form-control" style={{color: "black"}} type="text" onChange={this.handle}/>
        			</div>
        			<div className="col-md-1">
	        			<span>Cost</span>
	        			<select className="form-control" name="cost">
	        				{costs}
	        			</select>
	        		</div>
        			<div className="col-md-3">
        				<br/>
	        			<button className="btn btn-default">Search</button>
	        		</div>
        		</form>
    }
}

export default Filters