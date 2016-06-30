'use strict'
const fs = require('fs')
const request = require('request')

const options = {
	url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards',
	headers: {
		'X-Mashape-Authorization' : 'qzlLrE8lc1mshBjihmtrBJ2nFjC5p1CTTAxjsnez8pmReMT2mn'
	}
}

class CardsApi {
	updateCardsData(outputFile) {
		request(options, (err, resp, body) => {
			if (!err && resp.statusCode == 200) {
				var data = JSON.parse(body)
				this.writeJsonFile(data, outputFile)
			} else {
				console.log('Error while contacting the API', err)
			}
		})
	}

	writeJsonFile(data, outputFile) {
		fs.writeFile(outputFile, JSON.stringify(data, null, 4))
	}
}

module.exports = new CardsApi()