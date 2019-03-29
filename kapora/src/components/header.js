import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/navbar-logo.png' 

const Header = () => (
  <div>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item navbar-logo" to="/">
          <img src={logo  } width="143" height="32" />
        </Link>
      </div>

      <div className="navbar-end">
        <Link className="navbar-item" to="/">
          oferta
        </Link>
        <Link className="navbar-item" to="/">
          realizacja
        </Link>
        <Link className="navbar-item" to="/">
          portfolio
        </Link>
        <Link className="navbar-item" to="/">
          kontakt
        </Link>
      </div>
    </nav>

    <div className="page-header columns is-multiline is-centered">
      <div className="column is-full">
        <h1>
          If you want to take it to next level,<br></br>
          you came to the right place.
        </h1>
      </div>
      <div className="column is-full">
        <button className="button is-medium">ZOBACZ OFERTE</button>
      </div>
    </div>
  </div>
)

export default Header
