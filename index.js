const dashButton = require('node-dash-button')
const config = require('./config.json')

const dash = dashButton(config.buttonAddress, null, null, 'all')
dash.on("detected", () => {
    console.log("omg found")
})
