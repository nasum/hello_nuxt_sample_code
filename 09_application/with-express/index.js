const app = require('express')()
const { Nuxt, Builder } = require('nuxt')

const host = 'localhost'
const port = 3000

const config = require('./nuxt.config.js')
config.dev = true

const nuxt = new Nuxt(config)

const builder = new Builder(nuxt)
builder.build()

app.use(nuxt.render)

app.listen(port, host)
console.log('Server listening on ' + host + ':' + port)