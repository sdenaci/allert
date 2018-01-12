import axios from 'axios'
import { postDish } from './dish'

//action types
const POST_PERCENTAGE = 'POST_PERCENTAGE'

//action creators
export const postPercentage = percentage => ({
  type: POST_PERCENTAGE,
  percentage
})

//reducer

export default function reducer (state = '', action) {

  switch (action.type) {

    case POST_PERCENTAGE:
      return action.percentage

    default:
      return state

  }

}

//thunk creators

export const calculatePercentage = (dish) =>
  dispatch => {
    Promise.all([
      axios.get(`/api/dishes/${dish}`),
      axios.get(`/api/dishes/${dish}/allergy`)
    ])
      .then(values => {
        const percentage = values[1].data / values[0].data
        dispatch(postPercentage(percentage))
        dispatch(postDish(dish))
      })
      .catch(console.error)

  }
