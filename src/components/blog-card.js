import React from 'react'

import NextButton from './next-button'
import './blog-card.css'

const BlogCard = (props) => {
  return (
    <div className="blog-card-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-card-image"
      />
      <h5 className="blog-card-text">{props.new_prop}</h5>
      <span>{props.description}</span>
      <NextButton button="Visitar"></NextButton>
    </div>
  )
}

export default BlogCard
