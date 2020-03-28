const hotClient = require('webpack-hot-middleware/client')
hotClient.subscribe(e => {
  if (e.action === 'reload') {
    window.location.reload()
  }
})
