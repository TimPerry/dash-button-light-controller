const dashButton = require('node-dash-button')
const config = require('./config.json')

console.log("Listening for pressed from button with address", config.buttonAddress)
const dash = dashButton(config.buttonAddress, "eno1", null, "all")
dash.on("detected", () => {
  var http = require('http');
  http.get({
    host: "192.168.1.50",
    port: 4242,
    path: "/livingRoom/avr/vol/65"
  })

  console.log("omg found")
})
