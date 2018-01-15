import React from 'react'
import { connect } from 'react-redux'

const searchResults = (props) => {

  const { percentage, dish } = props

  return (
    <div>
      {Object.keys(percentage).map(allergy => {
        return (
        <h3 key={allergy}>{Math.floor(percentage[allergy] * 100)}% of recipes for {dish} are {allergy.toLowerCase()}-free </h3>
        )
      })}
      <button>save search</button> <br />
      <button>new search</button>
    </div>
  )

}

const mapState = (state) => ({
  dish: state.dish,
  percentage: state.percentage
})

const mapDispatch = null


export default connect(mapState, mapDispatch)(searchResults)

