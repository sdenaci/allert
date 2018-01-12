const router = require('express').Router()
const axios = require('axios')

const appId = process.env.YUMMLY_ID
const appKey = process.env.YUMMLY_KEY

router.get('/', (req, res, next) => {
  res.send('you are at `api/dishes`')
})

router.get('/:dishName', (req, res, next) => {
  const dishName = req.params.dishName
  return axios.get(`http://api.yummly.com/v1/api/recipes?_app_id=${appId}&_app_key=${appKey}&q=${dishName}`)
    .then(res => console.log('total recipe count: ', res.data.totalMatchCount))
    .then(() => (res.send('im console loggin stuff')))
})

router.get('/:dishName/:allergy', (req, res, next) => {
  const dishName = req.params.dishName
  const allergy = req.params.allergy
  return axios.get(`http://api.yummly.com/v1/api/recipes?_app_id=${appId}&_app_key=${appKey}&q=${dishName}&allowedAllergy`)
})

module.exports = router
