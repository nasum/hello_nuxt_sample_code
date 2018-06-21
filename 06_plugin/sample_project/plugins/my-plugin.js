export default (obj, inject) => {
  if (process.server) {
    console.log('in server')
  }
  inject('console', (data) => { console.log(data) })
}