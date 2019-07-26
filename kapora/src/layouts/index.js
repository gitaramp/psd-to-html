import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.scss'
import favicon16 from "../img/favicon16.png"
import favicon32 from "../img/favicon32.png"
import favicon64 from "../img/favicon64.png"
import DirectionReveal from 'direction-reveal'
const directionRevealDemo = DirectionReveal();
const directionRevealSwing = DirectionReveal({
  selector: '.direction-reveal',
  itemSelector: '.direction-reveal__card',
  animationName: 'slide',
  enableTouch: true,
  touchThreshold: 250
});

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={`${data.site.siteMetadata.title} | Nowoczesne Aplikacje Internetowe`}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
        { name: 'author', content: data.site.siteMetadata.author },
        { name: 'viewport', content: "width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" },
      ]}
      link={[
        { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` },
        { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` },
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon64}` },
      ]}
      script={[
        {src: "https://code.jquery.com/jquery-3.3.1.min.js", integrity: "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=", 
        crossorigin: "anonymous"}
      ]}
    />

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
