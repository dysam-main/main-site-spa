import React from 'react'

import PropTypes from 'prop-types'

import './primary-blue-button.css'

const PrimaryBlueButton = ({text,onClick}) => {
  return (
    <div className="primary-blue-button-container" >
      <button className="primary-blue-button-button button ButtonSmall" onClick={onClick}>
        {text}
      </button>
    </div>
  )
}



export default PrimaryBlueButton
