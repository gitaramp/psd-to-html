import React from 'react'
import Link from 'gatsby-link'

const Contact = () => (
  <section className="contact-section columns is-multiline">
    <h2 className="column is-full is-centered">
      Kontakt
    </h2>
    
    <div className="contact-form container">
      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Imię" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="email" placeholder="Adres E-mail" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <div className="select">
            <select>
              <option disabled selected>Temat</option>
              <option>Projekt strony</option>
              <option>Wprowadzenie poprawek</option>
              <option>Zapytanie</option>
              <option>Inne</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <textarea className="textarea" placeholder="Wiadomość"></textarea>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <button className="button is-link is-pulled-right">Wyślij</button>
        </div>
      </div>
    </div>

    
  </section>
)

export default Contact
