import React from 'react'
import { connect } from 'react-redux'
import { calculatePercentage } from '../store'

export const searchForm = (props) => (
  <div>
    <form onSubmit={props.onSubmit}>
        <legend>allert tells you about the possible allergens in your favorite dishes</legend>
          dish:
            <input
              name="dish"
              type="text"
            />
        <br />
        <legend>allergies:</legend>
        <input type="checkbox" name="allergy" value="Gluten" /> Gluten <br />
        <input type="checkbox" name="allergy" value="Peanut" /> Peanut <br />
        <input type="checkbox" name="allergy" value="Seafood" /> Seafood <br />
        <input type="checkbox" name="allergy" value="Soy" /> Soy <br />
        <input type="checkbox" name="allergy" value="Dairy" /> Dairy <br />
        <input type="checkbox" name="allergy" value="Egg" /> Egg <br />
        <input type="checkbox" name="allergy" value="Sulfite" /> Sulfite <br />
        <input type="checkbox" name="allergy" value="TreeNut" /> Tree-Nut <br />
        <input type="checkbox" name="allergy" value="Wheat" /> Wheat <br />
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
    let allergens = []
    evt.target.allergy.forEach(allergy => {
      if (allergy.checked === true) {
        allergens.push(allergy.value)
      }
    })
    if (!evt.target.dish.value.length || !allergens.length) {
      alert('please submit both a dish and at least one allergy')
    } else {
      dispatch(calculatePercentage(evt.target.dish.value, allergens))
    }
    evt.target.dish.value = ''
  }
})

export default connect(null, mapDispatchToProps)(searchForm)
