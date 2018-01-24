import axios from 'axios'

//action types
const POST_IMG = 'POST_IMG'
const CLEAR_IMG = 'CLEAR_IMG'

//action creators
export const postImg = img => ({
  type: POST_IMG,
  img
})

export const clearImg = () => ({
  type: CLEAR_IMG
})

//reducer

export default function reducer (state = {}, action) {

  switch (action.type) {

    case POST_IMG:
      return action.img

    case CLEAR_IMG:
      return {}

    default:
      return state

  }

}


//thunx

export const fetchImages = resultsArray =>
  dispatch => {
    const imgDict = {}
    const apiArray = []

    resultsArray.forEach(recipeCategory => {
      const topSixRecipes = recipeCategory.data.matches.slice(0, 6)
      topSixRecipes.forEach(recipe => {
        const recipeId = recipe.id

        apiArray.push(axios.get(`api/recipes/${recipeId}`))

      })
    })

    Promise.all(apiArray)
      .then(results => {
        results.forEach(result => {
          const recipe = result.data
          imgDict[recipe.id] = recipe.images[0].hostedLargeUrl
        })
        dispatch(postImg(imgDict))

      })
  }

