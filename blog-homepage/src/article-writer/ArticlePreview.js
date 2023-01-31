import React from 'react';
import PropTypes from 'prop-types'

function ArticlePreview({ title, description, hasAudioAvailable, memberPreview, section }) {
    const audioBanner = hasAudioAvailable ? <p>Audio Available</p> : <p></p>
    const memberPreviewBanner = memberPreview ? <p>Member Preview</p> : <p></p>
    const previewClass = section+'-preview'
    return( 
        <div className={previewClass}>
            {audioBanner}
            {memberPreviewBanner}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

ArticlePreview.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    hasAudioAvailable: PropTypes.bool,
    memberPreview: PropTypes.bool,
}

export default ArticlePreview
