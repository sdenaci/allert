//action types
const POST_DISH = 'POST_DISH'

//action creators
export const postDish = dish => ({
  type: POST_DISH,
  dish
})

//reducer

export default function reducer (state = '', action) {

  switch (action.type) {

    case POST_DISH:
      return action.dish

    default:
      return state

  }

}
