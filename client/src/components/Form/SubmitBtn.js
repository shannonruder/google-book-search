import React from 'react'

export const SubmitBtn = props => {
  return (
    <button className="btn btn-success mt-2" {...props}>{props.children}</button>
  )
}
