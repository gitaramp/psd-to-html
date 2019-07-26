import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/navbar-logo.png'
import { document } from 'browser-monads'

const Header = () => (
  <div>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item navbar-logo" to="/">
          <img src={ logo } width="143" height="32" />
        </Link>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item" to="#offer-tab">
            oferta
          </Link>
          <Link className="navbar-item" to="#realization-tab">
            realizacja
          </Link>
          <Link className="navbar-item" to="#portfolio-tab">
            portfolio
          </Link>
          <Link className="navbar-item" to="#order-tab">
            zamów
          </Link>
          <Link className="navbar-item" to="#contact-tab">
            kontakt
          </Link>
        </div>
      </div>
    </nav>

    <div className="page-header columns is-multiline centered">
      <div className="column is-full">
        <h1>
          If you want to take it to next level,<br></br>
          you came to the right place.
        </h1>
      </div>
      <div className="column is-full">
        <Link to="#order-tab">
          <button className="button is-medium">WYBIERZ PAKIET</button>
        </Link>
      </div>
    </div>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});



export default Header
