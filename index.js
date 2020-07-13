const Hapi = require('@hapi/hapi')
const HapiWebSocket = require('hapi-plugin-websocket')

const apiRoutes = require('./api')
const socketRoutes = require('./socket')

const { config } = require('./helpers')

const start = async () => {
  const server = new Hapi.Server({ port: config.port })

  await server.register(HapiWebSocket)

  server.route(apiRoutes)
  server.route(socketRoutes)

  await server.start()
}

start().catch(error => {
  console.error(`ERROR: ${error}`)
  process.exit(1)
})
