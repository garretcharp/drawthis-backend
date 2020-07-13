module.exports = [{
  method: 'GET',
  path: '/games',
  handler: (request, h) => {
    return [{ id: 1, joinable: true }]
  }
}]
