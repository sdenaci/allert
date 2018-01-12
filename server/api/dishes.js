const router = require('express').Router()
const axios = require('axios')

const appId = process.env.YUMMLY_ID
const appKey = process.env.YUMMLY_KEY

router.get('/:dishName', (req, res, next) => {
  const dishName = req.params.dishName
  return axios.get(`http://api.yummly.com/v1/api/recipes?_app_id=${appId}&_app_key=${appKey}&q=${dishName}`)
    .then(res => res.data.totalMatchCount)
    .then(count => res.json(count))
    .catch(next)
})

router.get('/:dishName/:allergy', (req, res, next) => {
  const dishName = req.params.dishName
  const allergy = req.params.allergy
  return axios.get(`http://api.yummly.com/v1/api/recipes?_app_id=${appId}&_app_key=${appKey}&q=${dishName}&allowedAllergy[]=394^Peanut-Free`)
  .then(res => res.data.totalMatchCount)
  .then(count => res.json(count))
  .catch(next)
})


module.exports = router
