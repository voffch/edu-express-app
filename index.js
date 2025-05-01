const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello <a href="https://courses.mooc.fi/org/uh-cs/courses/devops-with-docker/chapter-4/deployment-pipelines">Deployment pipelines</a>!</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})