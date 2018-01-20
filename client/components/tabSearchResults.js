import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { RecipeSquare, DefaultButton, ResultGrid } from './index'
import { clearDish, clearRecipes, clearPercentage} from '../store'

class tabSearchResults extends Component {

  constructor() {
    super()
    this.state = {
      activeTab: 'allRecipes'
    }
    this.switchTab = this.switchTab.bind(this)
  }

  switchTab(evt) {
    this.setState({activeTab: evt.target.value})
  }

  render() {

    const { percentage, dish, clearSearch, recipes} = this.props
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
      <div className="flex">
        <div className="tab">
          <button
            className={this.state.activeTab==="allRecipes" ? "tab-button-active" : "tab-button"}
            key="allRecipes"
            value="allRecipes"
            onClick={this.switchTab}
          >All Recipes
          </button>
          {
            allergenArray.map(allergen =>
              <button
                className={this.state.activeTab===allergen ? "tab-button-active" : "tab-button"}
                key="allRecipes"
                value={allergen}
                onClick={this.switchTab}
              >{allergen}-Free Recipes
              </button>
          )}
        </div>
      </div>
      <div id="allRecipes" className={"tab-content"+(this.state.activeTab==="allRecipes" ? "-active":"")}>
        <ResultGrid recipes={recipes.allRecipes.matches} title="" />
      </div>
      {
        allergenArray.map(allergen =>
          <div id={allergen} className={"tab-content"+(this.state.activeTab===allergen ? "-active":"")}>
            <ResultGrid recipes={recipes[allergen].matches} title="" key={allergen}/>
          </div>
        )
      }
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
