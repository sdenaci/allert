import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DefaultButton } from './index'

const gridDivStyle = {
  flexBasis: '30%',
  borderStyle: 'solid',
  borderWidth: '2px',
  borderRadius: '5px',
  margin: '1rem'
}

class RecipeSquare extends Component {

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
      <div style={gridDivStyle}>
        <div>
          <h1>{recipe.recipeName}</h1>
          <img src={recipe.imageUrlsBySize[90]} />
          <p>ingredients:</p>
          <DefaultButton
            label={this.state.showIngredients ? 'Hide Ingredients' : 'Show Ingredients'}
            handleClick={this.handleToggle}
          />
          {this.state.showIngredients &&
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
    )
  }

}

export default RecipeSquare
