import React from 'react'

export const Jumbotron = props => {
  return (
    <div className="jumbotron">
      <h1>{props.children}</h1>
    </div>
  )
}
