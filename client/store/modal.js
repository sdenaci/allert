//action types
const SIGN_UP = 'SIGN_IN'
const LOGIN = 'LOGIN'
const HIDE_MODAL = 'HIDE_MODAL'

//action creators
export const sign_up = () => ({
  type: SIGN_UP,
})

export const login = () => ({
  type: LOGIN
})

export const hideModal = () => ({
  type: HIDE_MODAL,
})

//reducer

export default function reducer (state = '', action) {

  switch (action.type) {

    case SIGN_UP:
      return action.type

    case LOGIN:
      return action.type

    case HIDE_MODAL:
      return ''

    default:
      return state

  }

}
