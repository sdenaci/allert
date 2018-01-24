import React from 'react'
import { connect } from 'react-redux'
import { TabSearchResults, SearchForm } from './index'

const search = props => {

  const { dishBool } = props

  return (
    <div className="results">
      {
        dishBool===true ?
        <TabSearchResults />
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
