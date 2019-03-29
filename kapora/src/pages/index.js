import React from 'react'
import Link from 'gatsby-link'
import Offer from '../components/offer'
import Realization from '../components/realization'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'
import Footer from '../components/footer'

const IndexPage = () => (
  <div>
    <Offer />
    <Realization />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
