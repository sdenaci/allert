//action types
const POST_RECIPES = 'POST_RECIPES'
const CLEAR_RECIPES = 'CLEAR_RECIPES'

//action creators
export const postRecipes = recipeList => ({
  type: POST_RECIPES,
  recipeList
})

export const clearRecipes = () => ({
  type: CLEAR_RECIPES
})

//reducer

export default function reducer (state = {}, action) {

  switch (action.type) {

    case POST_RECIPES:
      return action.recipeList

    case CLEAR_RECIPES:
      return {}

    default:
      return state

  }

}
