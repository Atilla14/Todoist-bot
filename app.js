var express = require('express')
var app = express()
var port = process.env.PORT || 3000

var request = require('request')
var todoist_token = "bbf5385f9baa1462e652fe9f946d72bee32c83d7"

app.listen(port, function() {
	console.log("Listening on port ", port)
	// request.post('https://todoist.com/API/v7/sync', {form: {token: todoist_token, sync_token: "*", resource_types: '["all"]'}}, function (error, response, body) {
	//     console.log(response)
	// })
})

app.get('/', function(req, res) {
	request.post("https://api.telegram.org/bot262106475:AAECiMk0tZNbfHcoZt1M5tpiSm4TfIU5Kw8/sendmessage", {form: {chat_id: "82013442", text: "working"}})
})