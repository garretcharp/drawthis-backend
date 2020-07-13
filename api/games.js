const routes = [{
  method: 'GET',
  path: '/games',
  handler: (request, h) => {
    return [{ id: 1, joinable: true }]
  }
}]

module.exports = routes
