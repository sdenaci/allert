import React from 'react'
import PropTypes from 'prop-types'
import { SearchForm } from './index'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const {email, dishBool} = props

  return (
    <div className="results">
      <h3>Welcome, {email}!</h3>
      {
        dishBool===true ?
        <TabSearchResults />
        :
        <SearchForm />

      }
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    dishBool: !!state.dish
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
