import React from 'react';
import PropTypes from 'prop-types'

function AuthorAvatar({ imageLink, isMember }) {
    const avatarClass = isMember ? 'member-writer' : 'oustide-writer'

    return(
        <img
            className={avatarClass}
            src={imageLink}
            alt='Author avatar'
        />
    );
}

AuthorAvatar.propTypes = {
    imageLink: PropTypes.string.isRequired,
    isMember: PropTypes.bool.isRequired
}

export default AuthorAvatar