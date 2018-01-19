import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { RecipeSquare, DefaultButton, ResultGrid } from './index'
import { clearDish, clearRecipes, clearPercentage} from '../store'

const tabSearchResults = props => {

  const { percentage, dish, clearSearch, recipes } = props
  const allergenArray = Object.keys(recipes).filter(key => key !== 'allRecipes')

  return (
    <div>
      <div className="tab">
        <DefaultButton
          className="tablinks"
          label="Top Results"
        />
        {
          allergenArray.map(allergen =>
            <DefaultButton
              className="tablinks"
              label={`Top ${allergen}-Free Results`}
            />
          )
        }
      </div>
      <div>
        <DefaultButton
          label="Save Search"
        />

        <DefaultButton
          label="New Search"
          handleClick={clearSearch}
        />
      </div>
    </div>
  )

}

const mapState = state => ({
  dish: state.dish,
  percentage: state.percentage,
  recipes: state.recipes
})

const mapDispatch = dispatch => ({
  clearSearch: () => {
    dispatch(clearDish())
    dispatch(clearRecipes())
    dispatch(clearPercentage())
  }
})


export default connect(mapState, mapDispatch)(tabSearchResults)
