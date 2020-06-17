const express = require('express')
const compression = require('compression')
const app = express()

// compression在静态资源托管之前注册,否则不生效
app.use(compression())
app.use(express.static('./dist'))

app.listen(86, () => {
  console.log('server running at http://127.0.0.1:86')
})