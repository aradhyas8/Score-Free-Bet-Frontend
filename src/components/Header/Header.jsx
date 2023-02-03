import React from 'react'
import './heading.scss'
import scorebet from '../../Assets/scorebet.png'

const Header = () => {
  return (
    <div className="parent heading-par">
        <div className="container heading-cont">
            <img src={scorebet} />
            <h1>Share Free Bets</h1>
        </div>
    </div>
  )
}

export default Header
