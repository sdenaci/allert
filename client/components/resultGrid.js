import React from 'react'
import { RecipeSquare, DefaultButton } from './index'


const resultGrid = props => {

  const { recipes, title } = props

  return (
    <div className="column-flex-left">
      <div className="wrapFlex">
        {recipes.map(recipe =>
          <RecipeSquare recipe={recipe} key={recipe.id}/>
        )}
      </div>
    </div>
  )

}

export default resultGrid
