const appPort = process.env.NODE_NGINX_APP_PORT ?? 8080

const express = require('express')
const app = express()
const { inspect } = require('util')

const db = require('./db/database')
const service = require('./service/people')

app.get('/', async (_, res) => {
  try {
    await service.insertRandomPerson()
    const allPeople = await service.listAllPeople()
    res.send(renderResponse(allPeople))
  } catch(error) {
    logError(error)
    res.status(500).send('<h1>Unexpected error!</h1>')
  }
})

app.listen(appPort, async () => {
  await db.init().catch(logError)
})

const renderResponse = allPeople => {
  return `
    <h1>Full Cycle Rocks!</h1>
    <ul>
      ${allPeople.map(person => `<li>${person}</li>`).join('\n')}
    </ul>
  `
}

const logError = error => {
  console.log(inspect({ error }, { depth: null, showHidden: false, compact: false }))
}