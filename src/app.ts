import express from 'express'

const app = express()

app.get('/', (_req, res) => {
  res.send('Hello Express')
})

app.listen(3000, () => {
  console.warn('Server listening on port 3000')
})

