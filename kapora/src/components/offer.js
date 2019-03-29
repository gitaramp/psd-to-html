import React from 'react'
import Link from 'gatsby-link'

import { FaMobileAlt, FaCheckSquare, FaHandshake, FaPenSquare, FaCalendarCheck, FaChartBar } from 'react-icons/fa';


const Offer = () => (
  <div className="container">
    <section className="offer-section columns is-multiline is-centered">
      <h2 className="column is-full">
        Oferta
      </h2>
      <h3 className="column is-full">
        Aenean lobrtis et metus ut elementum. Cras ut urna mi:
      </h3>

      <div className="offer-column column is-5">
        <div className="columns">
          <div className="offer-icon column is-2">
            <FaMobileAlt />
          </div>
          <div className="offer-text column">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, magni.</p>
          </div>
        </div>
      </div>

      <div className="offer-column column is-5">
        <div className="columns">
          <div className="offer-icon column is-2">
            <FaCheckSquare />
          </div>
          <div className="offer-text column">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, magni.</p>
          </div>
        </div>
      </div>

      <div className="offer-column column is-5">
        <div className="columns">
          <div className="offer-icon column is-2">
            <FaHandshake />
          </div>
          <div className="offer-text column">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, magni.</p>
          </div>
        </div>
      </div>

      <div className="offer-column column is-5">
        <div className="columns">
          <div className="offer-icon column is-2">
            <FaPenSquare />
          </div>
          <div className="offer-text column">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, magni.</p>
          </div>
        </div>
      </div>

      <div className="offer-column column is-5">
        <div className="columns">
          <div className="offer-icon column is-2">
            <FaCalendarCheck />
          </div>
          <div className="offer-text column">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, magni.</p>
          </div>
        </div>
      </div>

      <div className="offer-column column is-5">
        <div className="columns">
          <div className="offer-icon column is-2">
            <FaChartBar />
          </div>
          <div className="offer-text column">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, magni.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Offer