import React from 'react';
import PropTypes from 'prop-types'
import AuthorAvatar from './AuthorAvatar'

function ArticleAuthor({ author, postedDate, minutesToRead, section }) {
    //Change date's format
    const articleDate = new Date(postedDate)
    const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'][articleDate.getMonth()]
    let dateShortFormat = `${monthName} ${articleDate.getDate()}`

    const authorClass = section+'-author'
    return(
        <div className={authorClass}>
            <AuthorAvatar imageLink={author.image} isMember={author.isMediumMember} />
            <p className='author-name'><b>{author.name}</b></p>
            <p>{dateShortFormat} ⋅ {minutesToRead} min read</p>
        </div>
    );
}

ArticleAuthor.propTypes = {
    author: PropTypes.object.isRequired,
    postedDate: PropTypes.string.isRequired,
    minutesToRead: PropTypes.number.isRequired,
}

export default ArticleAuthor