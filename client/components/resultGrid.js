import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RecipeSquare, DefaultButton } from './index'

class resultGrid extends Component {

  constructor() {
    super()
    this.state = {
      showRecipes: false
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

    handleToggle() {
    this.state.showRecipes ? this.setState({showRecipes: false}) : this.setState({showRecipes: true})
  }

  render() {

    const { recipes, title } = this.props

    return (
      <div className="column-flex">
        <DefaultButton
          className="tablinks"
          label={title}
          handleClick={this.handleToggle}
        />
        {
          this.state.showRecipes &&
          <div className="wrapFlex">
            {recipes.map(recipe =>
              <RecipeSquare recipe={recipe} key={recipe.id}/>
            )}
          </div>
        }
      </div>
    )

  }
}

export default resultGrid
