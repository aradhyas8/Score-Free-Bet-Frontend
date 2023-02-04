import React from 'react'
import './congrats.scss'
import {Link} from 'react-router-dom'

const Congrats = () => {
  return (
    <div className="parent congrats-page">
        <div className="container text-center">
            <h1>Congratulations!</h1>
            <h2>You have placed a bet</h2>
            <br /><br />
            <Link to="/secondary">
            <button className="btn btn-primary btn-lg">Rewards</button>
          </Link>
        </div>
    </div>
  )
}

export default Congrats
