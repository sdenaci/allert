import React from 'React'


const Checkbox = props => {

  const { label } = props

  return (
    <div className="wrapFlexCheck">
      <div className="checkbox">
        <input type="checkbox" name="allergy" value={label} id={`${label}Checkbox`}/>
        <label htmlFor={`${label}Checkbox`}></label>
      </div>
      <p>{label}</p>
    </div>
  )

}
export default Checkbox
