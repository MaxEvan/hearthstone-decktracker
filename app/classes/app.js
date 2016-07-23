import $ from 'jquery'

class App {
    getAllCards() {
        return new Promise(function (fulfill, reject){
            $.getJSON( '/cards.json', (data) => {
                try {
                    fulfill(data)
                } catch (ex) {
                    reject(ex)
                }
            })
        })
    }
}

export default new App()