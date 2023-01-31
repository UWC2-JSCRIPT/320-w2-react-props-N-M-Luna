import React from 'react'
import PropTypes from 'prop-types'

function ArticleImage({ imgUrl, section }) {
    return(
      <img 
        className={section}
        src={imgUrl}
        alt='Article Visuals'
      />
    );
}

ArticleImage.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired
}

export default ArticleImage