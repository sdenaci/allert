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
    console.log('hi')
    this.state.showIngredients ? this.setState({showIngredients: false}) : this.setState({showIngredients: true})
  }

  render() {

    const { recipe, images } = this.props
    const id = recipe.id
    const recImage = images[id]
    console.log(recipe)
    return (
      <div className="recipeImgDiv" onClick={this.handleToggle}>
        <h1>{recipe.recipeName}</h1>
        <div className={"ingredients"+(this.state.showIngredients ? "-active" : "")}>
          <p>ingredients - {recipe.ingredients.join(', ')}</p>
        </div>
        <img src={recImage} className="recipeImg"/>
      </div>
    )
  }

}



const mapState = state => ({
  images: state.images
})


export default connect(mapState)(recipeSquare)
