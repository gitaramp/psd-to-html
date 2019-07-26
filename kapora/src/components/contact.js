import React from 'react'

const Contact = () => (
  <div id="contact-tab">
    <section className="contact-section columns is-multiline centered">
      <h2 className="column is-full">
        Kontakt
      </h2>
      
      <div className="contact-form column is-full-mobile container">
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
                <option selected disabled>Temat</option>
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
  </div>
)

export default Contact
