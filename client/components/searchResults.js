import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { RecipeSquare, DefaultButton, ResultGrid } from './index'
import { clearDish, clearRecipes, clearPercentage} from '../store'

const searchResults = props => {

  const { percentage, dish, clearSearch, recipes } = props
  const allergenArray = Object.keys(recipes).filter(key => key !== 'allRecipes')

  return (
    <div>
      {
        Object.keys(percentage).map(allergy =>
          <h3 key={allergy}>
            {Math.floor(percentage[allergy] * 100)}% of recipes for {dish} are {allergy.toLowerCase()}-free
          </h3>
        )
      }
      <div className="flex-start-container">
        <div className="tab">
          <ResultGrid recipes={recipes.allRecipes.matches} title={`Top Results`} />

          {
            allergenArray.map(allergen =>
              <ResultGrid recipes={recipes[allergen].matches} title={`Top ${allergen}-Free Results`} key={allergen}/>
            )
          }
        </div>
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


export default connect(mapState, mapDispatch)(searchResults)

