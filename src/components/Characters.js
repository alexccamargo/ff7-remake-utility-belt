import React from 'react'

export const Characters = ({ characters }) => (
  <div>
      {
        characters.map(c => <div key={c.key}>{ c.name}</div>)
      }
  </div>
)
