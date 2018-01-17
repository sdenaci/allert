const Sequelize = require('sequelize')
const db = require('../db')

const Search = db.define('search', {}, {})

module.exports = Search


//

// User has many searches

// search has one dish,
// search has many allergies

