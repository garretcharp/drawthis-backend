const gamesRoutes = require('./games')

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return {
      hello: 'world'
    }
  }
}].concat(gamesRoutes)
