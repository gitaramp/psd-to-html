import React from 'react'
import Header from '../components/header'
import Offer from '../components/offer'
import Realization from '../components/realization'
import Portfolio from '../components/portfolio'
import Order from '../components/order'
import Contact from '../components/contact'
import Footer from '../components/footer'
import 'font-awesome/css/font-awesome.min.css'


const IndexPage = () => (
  <div>
    <div className="hero is-fullheight">
      <Header />
      <Offer />
      <div></div>
      <div></div>
      <div></div>
    </div>
    <Realization />
    <Portfolio />
    <Order />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
