//Load environment variables
require("dotenv").config()

const { Avalanche } = require("avalanche")

if(!process.env.NODE_URL) throw "NODE URL env not set!"
if(!process.env.NODE_API_KEY) throw "NODE API KEY env not set!"
if(!process.env.NETWORK_ID) throw "NETWORK ID env not set!"
if(!process.env.NETWORK_NAME) throw "NETWORK NAME env not set!"

const url = new URL(process.env.NODE_URL)
const client = new Avalanche(
	url.hostname,
	url.port,
	url.protocol.replace(":", ""),
	parseInt(process.env.NETWORK_ID),
	"X",
	"C",
	process.env.NETWORK_NAME
	)

//Apply DataHub API authentication token
client.setAuthToken(process.env.NODE_API_KEY)

module.exports = client
