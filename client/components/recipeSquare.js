import React from 'react'
import { connect } from 'react-redux'

const recipeSquare = (props) => {

  const { recipe } = props

  return (
    <div>
      <h1>{recipe.recipeName}</h1>
      <img src={recipe.imageUrlsBySize[90]} />
      <p>ingredients:</p>
      <ul>
        {
          recipe.ingredients.map(ingredient =>
            <li key={ingredient}>{ingredient}</li>
          )
        }
      </ul>
    </div>
  )
}

export default recipeSquare
