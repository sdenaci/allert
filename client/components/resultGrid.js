import React from 'react'
import { connect } from 'react-redux'
import { RecipeSquare } from './index'


const resultGrid = (props) => {

  const { recipes, title } = props

  return (
    <div>
      <p>{title}</p>
      <div className="wrapFlex">
      {recipes.map(recipe =>
        <RecipeSquare recipe={recipe} key={recipe.id}/>
      )}
      </div>

    </div>
  )

}

export default resultGrid
