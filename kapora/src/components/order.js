import React from 'react'


const Order = () => (
  <div id="order-tab">
    <section className="order-section columns is-multiline">
      <h2 className="column is-full is-full-mobile centered">
        Zamów
      </h2>

      <div className="column is-full">
        <div className="columns centered is-multiline">
          <div className="order-background column is-3 is-full-mobile">
            <div className="order-column">
              <p className="title">OnePage</p>
              <ul className="order-list">
                <li><i className="fa fa-check-circle"></i>Lorem ipsum dolor sit</li>
                <li><i className="fa fa-check-circle"></i>Lorem ipsum dolor sit</li>
                <li><i className="fa fa-check-circle"></i>Lorem ipsum dolor sit</li>
                <li><i className="fa fa-check-circle"></i>Lorem ipsum dolor sit</li>
                <li className="unavailable">
                  <i className="fa fa-times-circle" aria-hidden="true"></i>
                  Lorem ipsum dolor sit
                </li>
                <li className="unavailable">
                  <i className="fa fa-times-circle" aria-hidden="true"></i>
                  Lorem ipsum dolor sit
                </li>
                <li className="unavailable">
                  <i className="fa fa-times-circle" aria-hidden="true"></i>
                  Lorem ipsum dolor sit
                </li>
              </ul>
              <p className="subtitle">od 300 ,-</p>
              <button className="button is-medium">Zamawiam</button>      
            </div>
          </div>
          <div className="order-background column is-3 is-full-mobile">
            <div className="order-column">
              <p className="title">Standard</p>
              <ul className="order-list">
                <li><i className="fa fa-check-circle"></i>Lorem ipsum dolor sit</li>
                <li><i className="fa fa-check-circle"></i>Lorem ipsum dolor sit</li>
                <li><i className="fa fa-check-circle"></i>Lorem ipsum dolor sit</li>
                <li><i className="fa fa-check-circle"></i>Lorem ipsum dolor sit</li>
                <li><i className="fa fa-check-circle"></i>Lorem ipsum dolor sit</li>
                <li className="unavailable">
                  <i className="fa fa-times-circle" aria-hidden="true"></i>
                  Lorem ipsum dolor sit
                </li>
                <li className="unavailable">
                  <i className="fa fa-times-circle" aria-hidden="true"></i>
                  Lorem ipsum dolor sit
                </li>
              </ul>
              <p className="subtitle">od 400 ,-</p>
              <button className="button is-medium">Zamawiam</button>
            </div>
          </div>
          <div className="order-background column is-3 is-full-mobile">
            <div className="order-column">
              <p className="title">Rozszerzona</p>
              <ul className="order-list">
                <li><i className="fa fa-check-circle"></i>Lorem ipsum dolor sit</li>
                <li><i className="fa fa-check-circle"></i>Lorem ipsum dolor sit</li>
                <li><i className="fa fa-check-circle"></i>Lorem ipsum dolor sit</li>
                <li><i className="fa fa-check-circle"></i>Lorem ipsum dolor sit</li>
                <li><i className="fa fa-check-circle"></i>Lorem ipsum dolor sit</li>
                <li><i className="fa fa-check-circle"></i>Lorem ipsum dolor sit</li>
                <li><i className="fa fa-check-circle"></i>Lorem ipsum dolor sit</li>
              </ul>
              <p className="subtitle">od 500 ,-</p>
              <button className="button is-medium">Zamawiam</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
)

export default Order