import React from 'react'
import './CountentValues.css'

export const CountentValues = ({tittle,content,children}) => {
  return (
    <div className='ContentValues'>
        <div className="card">
        <p className="card-title">{tittle}</p>
        <p className="small-desc">{content}</p>
        <div className="go-corner">
        <div className="go-arrow">→</div>
        </div>
    </div>
        {children}
    </div>
  )
}
