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
        <div className="recipeSquareElem">
          <p>{recipe.recipeName}</p>
          <img src={recipe.imageUrlsBySize[90]} />
          <div className={this.state.showIngredients ? "display-ingredient" : "hide-ingredient"}>
            <p>ingredients:</p>
            <DefaultButton
              label={this.state.showIngredients ? 'Hide' : 'Show'}
              handleClick={this.handleToggle}
            />
            {
              this.state.showIngredients &&
              <ul>
                {
                  recipe.ingredients.map(ingredient =>
                    <li key={ingredient}>{ingredient}</li>
                  )
                }
              </ul>
            }
          </div>
        </div>
      </div>
    )
  }

}

export default recipeSquare
