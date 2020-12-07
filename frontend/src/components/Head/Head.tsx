import React from 'react'
import Helmet from 'react-helmet'

interface HeadInterface {
  title?: String
}

const Head: React.FC<HeadInterface> = ({ title }) => {
  return (
    <Helmet>
      <title> GameWiki - {title}</title>
    </Helmet>
  )
}

Head.defaultProps = {
  title: ' '
}

export default Head
