//action types
const POST_DISH = 'POST_DISH'
const CLEAR_DISH = 'CLEAR_DISH'

//action creators
export const postDish = dish => ({
  type: POST_DISH,
  dish
})

export const clearDish = () => ({
  type: CLEAR_DISH
})

//reducer

export default function reducer (state = '', action) {

  switch (action.type) {

    case POST_DISH:
      return action.dish

    case CLEAR_DISH:
      return ''

    default:
      return state

  }

}
