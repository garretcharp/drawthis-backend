module.exports = ({ id, method, data } /* { server, client, peers } */) => {
  return {
    method,
    recieved: { id, data }
  }
}
