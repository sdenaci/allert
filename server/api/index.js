const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/dishes', require('./dishes'))
router.use('/recipes', require('./recipes'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
