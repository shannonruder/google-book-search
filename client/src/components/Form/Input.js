import React from 'react'

export const Input = props => {
  return (
    <div className="form-group">
      <input type="text" className="form-control" {...props} />
    </div>
  )
}
