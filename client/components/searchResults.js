import React, {Component} from 'react'
import { connect } from 'react-redux'

const searchResults = (props) => (
  <h3>{Math.floor(props.percentage*100)}% of recipes for {props.dish} are peanut free </h3>
)

const mapState = (state) => ({
  dish: state.dish,
  percentage: state.percentage
})

const mapDispatch = null


export default connect(mapState, mapDispatch)(searchResults)

