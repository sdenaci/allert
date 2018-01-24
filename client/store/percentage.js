import axios from 'axios'
import { postDish } from './dish'
import { postRecipes } from './recipes'
import { fetchImages } from './images'

//action types
const POST_PERCENTAGE = 'POST_PERCENTAGE'
const CLEAR_PERCENTAGE = 'CLEAR_PERCENTAGE'

//action creators
export const postPercentage = (percentageDict) => ({
  type: POST_PERCENTAGE,
  percentageDict
})

export const clearPercentage = () => ({
  type: CLEAR_PERCENTAGE
})

//reducer

export default function reducer (state = {}, action) {

  switch (action.type) {

    case POST_PERCENTAGE:
      return action.percentageDict

    case CLEAR_PERCENTAGE:
      return {}

    default:
      return state

  }

}

//thunk creators

export const calculatePercentage = (dish, allergens) =>
  dispatch => {
    let apiArray = [axios.get(`/api/dishes/${dish}`)]
    let allRecipes, allRecipesCount, safeRecipeArray
    let imgDict = {}

    allergens.forEach(allergen => {
      apiArray.push(axios.get(`/api/dishes/${dish}/${allergen}`))
    })

    Promise.all(apiArray)
      .then(results => {
        allRecipes = results[0].data
        allRecipesCount = allRecipes.totalMatchCount
        safeRecipeArray = results.slice(1)

        dispatch(fetchImages(results))

      })
      .then(() => {
        const percentageDictionary = {}
        const recipeDictionary = {allRecipes}

        allergens.forEach((allergen, idx) => {
          const allergenSafeRecipes = safeRecipeArray[idx].data
          const allergenSafeRecipeCount = allergenSafeRecipes.totalMatchCount
          const percentage = allergenSafeRecipeCount / allRecipesCount

          percentageDictionary[allergen] = percentage
          recipeDictionary[allergen] = allergenSafeRecipes

        })

        dispatch(postPercentage(percentageDictionary))
        dispatch(postRecipes(recipeDictionary))
        dispatch(postDish(dish))
      })
      .catch(console.error)
  }
