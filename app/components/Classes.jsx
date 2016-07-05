import React from 'react'

class Classes extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'Classes'
    }

    render() {
        var classes = ['druid', 'hunter', 'mage', 'paladin', 'priest', 'rogue', 'shaman', 'warlock', 'warrior']
                    .map(item => <img className="heroClass" src={'img/' + item + '.png'} />)

        return  <div>
                    {classes}
                </div>
    }
}

export default Classes