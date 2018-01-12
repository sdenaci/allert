import React, { Component } from 'react'
import { connect } from 'react-redux'
import { calculatePercentage } from '../store'

const appStyle = {
  fontFamily: 'courier'
}

export const searchForm = (props) => (
  <div style={appStyle}>
    <form onSubmit={props.onSubmit}>
        <legend>allert tells you about the possible allergens in your favorite dishes</legend>
          dish:
            <input
              name="dish"
              type="text"
            />
        <br/>
        <legend>allergy (select one)</legend>
        <input type="checkbox" name="allergy" value="Gluten"/> Gluten <br/>
        <input type="checkbox" name="allergy" value="Peanut"/> Peanut <br/>
        <input type="checkbox" name="allergy" value="Seafood"/> Seafood <br/>
        <input type="checkbox" name="allergy" value="Soy"/> Soy <br/>
        <input type="checkbox" name="allergy" value="Dairy"/> Dairy <br/>
        <input type="checkbox" name="allergy" value="Egg"/> Egg <br/>
        <input type="checkbox" name="allergy" value="Sulfite"/> Sulfite <br/>
        <input type="checkbox" name="allergy" value="Tree-Nut"/> Tree-Nut <br/>
        <input type="checkbox" name="allergy" value="Wheat"/> Wheat <br/>
        <div>
            <button
              type="submit">
              search
            </button>
        </div>
    </form>
  </div>
)


const mapDispatchToProps = dispatch => ({
    onSubmit: (evt) => {
      evt.preventDefault()
      evt.target.allergy.forEach(allergy => {
        console.log(allergy.value, allergy.checked)
        if (allergy.checked === true) console.log (allergy.value)
      })
      //dispatch(calculatePercentage(evt.target.dish.value))
      evt.target.dish.value = '';
    }
})

export default connect(null, mapDispatchToProps)(searchForm)
