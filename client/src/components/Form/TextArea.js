import React from 'react'

export const TextArea = props => {
  return (
    <div className="form-group">
      <textarea cols="30" rows="10" className="form-control" {...props}></textarea>
    </div>
  )
}
