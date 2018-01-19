import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {DefaultButton} from './index'
import {logout, sign_up, login} from '../store'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, handleClick, isLoggedIn, handleSignup, handleLogin} = props

  return (
    <div>
      <nav className="navbar">
        <div className="nav-title">
          <h1>Allert</h1>
        </div>
        <div className="nav-link-container">
        {
          isLoggedIn
            ? <div>
              {/* The navbar will show these links after you log in */}
              <Link to="/home">Home</Link>
              <a href="#" onClick={handleClick}>Logout</a>
            </div>
            : <div>
              {/* The navbar will show these links before you log in */}
              <div className="nav-link-container">
                <DefaultButton
                  label="Login"
                  handleClick={handleLogin}
                />
                <DefaultButton
                  label="Sign Up"
                  handleClick={handleSignup}
                />
              </div>
            </div>
        }
        </div>
      </nav>
      <hr />
      {children}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => ({
  isLoggedIn: !!state.user.id
})


const mapDispatch = dispatch => ({
  handleClick: () => {
    dispatch(logout())
  },
  handleSignup: () => {
    dispatch(sign_up())
  },
  handleLogin: () => {
    dispatch(login())
  }
})

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
