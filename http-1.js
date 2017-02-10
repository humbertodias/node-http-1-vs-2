const port = 3001
const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

app.get('*', (req, res) => {
    res
      .status(200)
      .json({message: 'ok'})
})

app.listen(port, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Listening on port: ' + port + '.')
    }
  })

