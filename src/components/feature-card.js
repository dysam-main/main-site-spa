import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = ({text,title,subtitle}) => {
  return (
    <div className="feature-card-container">
      <h5 className="feature-card-text HeadingTwo">{title}</h5>
      <h6 className="feature-card-text HeadingThree">{subtitle}</h6>
      <ul>
      {text.map((content,index)=><li key={index} className="feature-card-text1">{content}</li>)}

      </ul>
    </div>
  )
}
export default FeatureCard
