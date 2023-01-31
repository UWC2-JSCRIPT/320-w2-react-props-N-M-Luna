import React from 'react'
import PropTypes from 'prop-types'

function SectionHeader({ section }) {
    if (section==='for-you') {
        return(
            <div className='section-header'>
                <h2>For you</h2>
                <hr></hr>
            </div>
        );
    } else {
        return(
            <div className='section-header'>
                <h2>In case you missed it</h2>
                <hr></hr>
            </div>
        );
    }
}

SectionHeader.propTypes = {
    section: PropTypes.string.isRequired,
}


export default SectionHeader