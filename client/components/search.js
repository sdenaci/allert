import React from 'react'
import { connect } from 'react-redux'
import { SearchResults, SearchForm } from './index'

const search = props => {

  const { dishBool } = props

  return (
    <div>
      {
        dishBool===true ?
        <SearchResults />
        :
        <SearchForm />

      }
    </div>
  )
}

const mapState = state => ({
  dishBool: !!state.dish
})

export default connect(mapState, null)(search)
