const router = require('express').Router()
const axios = require('axios')

const appId = process.env.YUMMLY_ID
const appKey = process.env.YUMMLY_KEY

const allergyCodes = {
  gluten:"393^Gluten-Free",
  peanut:"394^Peanut-Free",
  seafood:"398^Seafood-Free",
  sesame:"399^Sesame-Free",
  soy:"400^Soy-Free",
  dairy:"396^Dairy-Free",
  egg:"397^Egg-Free",
  sulfite:"401^Sulfite-Free",
  treeNut:"395^Tree Nut-Free",
  wheat: "392^Wheat-Free"
}

router.get('/:dishName', (req, res, next) => {

  const dishName = req.params.dishName

  return axios.get(`http://api.yummly.com/v1/api/recipes?_app_id=${appId}&_app_key=${appKey}&q=${dishName}`)
    .then(res => res.data)
    .then(data => res.json(data))
    .catch(next)
})

router.get('/:dishName/:allergy', (req, res, next) => {

  const dishName = req.params.dishName
  const allergy = req.params.allergy.toLowerCase()

  return axios.get(`http://api.yummly.com/v1/api/recipes?_app_id=${appId}&_app_key=${appKey}&q=${dishName}&allowedAllergy[]=${allergyCodes[allergy]}`)
    .then(res => res.data)
    .then(data => res.json(data))
    .catch(next)
})


module.exports = router
