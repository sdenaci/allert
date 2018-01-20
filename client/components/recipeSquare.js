import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DefaultButton } from './index'

class recipeSquare extends Component {

  constructor() {
    super()
    this.state = {
      showIngredients: false
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.state.showIngredients ? this.setState({showIngredients: false}) : this.setState({showIngredients: true})
  }

  render() {

    const { recipe } = this.props

    return (
      <div className="recipeSquareDiv">
        <div className="flex-column">
          <p>{recipe.recipeName}</p>
          <img src={recipe.imageUrlsBySize[90]} />
          <div className={this.state.showIngredients ? "display-ingredient" : "hide-ingredient"}>
            <DefaultButton
              label={this.state.showIngredients ? 'Hide ingredients' : 'Show Ingredients'}
              handleClick={this.handleToggle}
            />
            <div className="flex">
            {
            this.state.showIngredients &&
              recipe.ingredients.map(ingredient =>
                <p key={ingredient}>*{ingredient}</p>)
            }
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default recipeSquare
