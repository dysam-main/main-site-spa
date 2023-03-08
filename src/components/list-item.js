import React from 'react'

import PropTypes from 'prop-types'

import './list-item.css'

const ListItem = ({title,body}) => {
  return (
    <div className="list-item-container">
      <h5 className="list-item-text HeadingThree home-text07">{title}</h5>
      <span>{body}</span>
    </div>
  )
}

export default ListItem
