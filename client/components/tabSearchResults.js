import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { RecipeSquare, DefaultButton, ResultGrid } from './index'
import { clearDish, clearRecipes, clearPercentage, clearImg} from '../store'

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

    const { percentage, dish, clearSearch, handleSafe, handleRisky, recipes} = this.props
    const allergenArray = Object.keys(recipes).filter(key => key !== 'allRecipes')

    return (
    <div>
      <div className="wrapFlexCarousel">
        <div className="percentageCarousel">
          {
            Object.keys(percentage).map(allergy =>
              <h3 key={allergy}>
                {Math.floor(percentage[allergy] * 100)}% of recipes for {dish} are {allergy.toLowerCase()}-free
              </h3>
            )
          }
          </div>
          <div className="buttonContainer">
            <DefaultButton
              label="Looks Safe"
              handleClick={handleSafe(dish)}
              idName="safeButton"
            />
            <DefaultButton
              label="Looks Risky"
              handleClick={handleRisky(dish)}
              idName="riskyButton"
            />
          </div>
        </div>
      <div className="flex">
        <div className="tab">
          <button
            className={this.state.activeTab==="allRecipes" ? "tab-button-active" : "tab-button"}
            key="allRecipes"
            value="allRecipes"
            onClick={this.switchTab}
          >Top Results
          </button>
          {
            allergenArray.map(allergen =>
              <button
                className={this.state.activeTab===allergen ? "tab-button-active" : "tab-button"}
                key={allergen}
                value={allergen}
                onClick={this.switchTab}
              >Top {allergen}-Free Results
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
      <div className="flexCenter">
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
    dispatch(clearImg())
  },
  handleSafe: (dish) => {
    console.log('handleSafe')
    // dispatch(saveSafe())
  },
  handleRisky: (dish) => {
    console.log('handleRisky')
    // dispatch(saveRisky())
  }
})


export default connect(mapState, mapDispatch)(tabSearchResults)
