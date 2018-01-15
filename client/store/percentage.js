import axios from 'axios'
import { postDish } from './dish'

//action types
const POST_PERCENTAGE = 'POST_PERCENTAGE'

//action creators
export const postPercentage = (percentageDict) => ({
  type: POST_PERCENTAGE,
  percentageDict
})

//reducer

export default function reducer (state = {}, action) {

  switch (action.type) {

    case POST_PERCENTAGE:
      return action.percentageDict

    default:
      return state

  }

}

//thunk creators

export const calculatePercentage = (dish, allergens) =>
  dispatch => {
    let apiArray = [axios.get(`/api/dishes/${dish}`)]

    allergens.forEach(allergen => {
      apiArray.push(axios.get(`/api/dishes/${dish}/${allergen}`))
    })

    Promise.all(apiArray)
      .then(results => {
        const totalRecipesCount = results[0].data
        const allergenSafeRecipes = results.slice(1)

        const percentageDictionary = {}

        allergens.forEach((allergen, idx) => {
          const allergenRecipeCount = allergenSafeRecipes[idx].data
          const percentage = allergenRecipeCount / totalRecipesCount

          percentageDictionary[allergen] = percentage

        })

        dispatch(postPercentage(percentageDictionary))
        dispatch(postDish(dish))
      })
      .catch(console.error)
  }
