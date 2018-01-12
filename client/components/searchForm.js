import React, { Component } from 'react'
import { connect } from 'react-redux'
import { calculatePercentage } from '../store'

const appStyle = {
  fontFamily: 'courier'
}

export const searchForm = (props) => (
  <div style={appStyle}>
    <form onSubmit={props.onSubmit}>
        <legend>allert tells you about the possible allergens in your favorite dishes</legend>
          <label>dish: </label>
            <input
              name="dish"
              type="text"
            />
        <div>
          <div>
            <button
              type="submit">
              search
            </button>
          </div>
        </div>
    </form>
  </div>
)


const mapDispatchToProps = dispatch => ({
    onSubmit: (evt) => {
      evt.preventDefault()
      dispatch(calculatePercentage(evt.target.dish.value))
      evt.target.dish.value = '';
    }
})

export default connect(null, mapDispatchToProps)(searchForm)
