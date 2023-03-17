import React from 'react'
import DropDownMenu from './DropDownMenu'

export default function Navbar() {
  return (
    <div className='nav-bar-top'>
    <DropDownMenu />
      <span className='shop-title'>
        <h1>Generic Shop</h1>
      </span>
      <span className='shopping-basket'>
        <button>🛒</button>
      </span>
    </div>
  )
}
