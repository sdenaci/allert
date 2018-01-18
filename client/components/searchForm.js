import React from 'react'
import { connect } from 'react-redux'
import { DefaultButton, Checkbox, SearchResults } from './index'
import { calculatePercentage } from '../store'

export const searchForm = (props) => {

  const { onSubmit, dishBool } = props
  const allergies = ["Gluten", "Peanut", "Seafood", "Soy", "Dairy", "Egg", "Sulfite", "TreeNut", "Wheat"]

  return (
    <div>
      <form onSubmit={onSubmit}>
          <legend>allert tells you about the possible allergens in your favorite dishes</legend>
              <input
                name="dish"
                type="text"
                placeholder="search dish keywords"
              />
          <legend>allergies:</legend>
          <div className="wrapLeft">
            {
              allergies.map(allergy =>
                <Checkbox label={allergy} key={allergy}/>
            )
            }
          </div>
              <DefaultButton
                label="Search"
                type="submit"
              />
      </form>
    </div>
  )
}

const mapState = state => ({
  dishBool: !!state.dish,
})

const mapDispatch = dispatch => ({
  onSubmit: (evt) => {
    evt.preventDefault()
    let allergens = []
    evt.target.allergy.forEach(allergy => {
      if (allergy.checked) {
        allergens.push(allergy.value)
      }
    })
    if (!evt.target.dish.value.length || !allergens.length) {
      alert('please submit both a dish and at least one allergy')
    } else {
      dispatch(calculatePercentage(evt.target.dish.value, allergens))
    }
    evt.target.dish.value = ''
  }
})

export default connect(mapState, mapDispatch)(searchForm)
