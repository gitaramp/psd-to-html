import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.scss'
import favicon16 from "../img/favicon16.png"
import favicon32 from "../img/favicon32.png"
import favicon64 from "../img/favicon64.png"

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={`${data.site.siteMetadata.title} | Nowoczesne Aplikacje Internetowe`}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
        { name: 'author', content: data.site.siteMetadata.author },
      ]}
      link={[
        { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` },
        { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` },
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon64}` },
      ]}
    />
    
    <Header />

    <div>
      {children()}
    </div>

  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        author
      }
    }
  }
`
