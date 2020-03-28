const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.dev.conf')
const app = express()
app.get('/', (req, res) => {
  res.send('The service has started !')
})

const compiler = webpack(config)
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})
const hotMiddleware = require('webpack-hot-middleware')(compiler)
compiler.plugin('complication', (complication) => {
  complication.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({action: 'reload'})
    cb()
  })
})
app.use(devMiddleware)
app.use(hotMiddleware)

app.listen(8888, err => {
  if (err) {
    console.log(err)
    return
  }
  console.log('listening at http://localhost:8888')
})
