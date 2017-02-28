import $ from 'jquery'

class App {
    getAllCards() {
        return new Promise(function (fulfill/*, reject*/){
            $.getJSON( '/cards.json', (data) => {
                fulfill(data)
            })
        })
    }
}

export default new App()
