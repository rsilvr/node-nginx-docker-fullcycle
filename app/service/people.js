const faker = require('@faker-js/faker').faker
const db = require('../db/database').getConnection

const tableName = 'people'

const insertRandomPerson = async () => {
  const name = faker.name.firstName()
  await db().query(`INSERT INTO ${tableName}(name) values ("${name}");`)
}

const listAllPeople = async () => {
  const [people] = await db().execute(`SELECT * FROM ${tableName};`)
  return people.map(({ name }) => name)
}

module.exports = {
  insertRandomPerson,
  listAllPeople
}