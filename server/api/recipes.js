const router = require('express').Router()
const axios = require('axios')

const appId = process.env.YUMMLY_ID
const appKey = process.env.YUMMLY_KEY

router.get('/:recipeId', (req, res, next) => {

  const recipeId= req.params.recipeId

  return axios.get(`http://api.yummly.com/v1/api/recipe/${recipeId}?_app_id=${appId}&_app_key=${appKey}`)
    .then(res => res.data)
    .then(data => res.json(data))
    .catch(next)
})


module.exports = router
