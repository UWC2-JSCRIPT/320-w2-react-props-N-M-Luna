import React from 'react';
import PropTypes from 'prop-types'
import ArticleImage from './ArticleImage';
import ArticlePreview from './ArticlePreview'
import ArticleAuthor from './ArticleAuthor'

function Article({ articleInfo, section }) {//section defines the CSS class (does the page render the article card horizontally or verically)

    //Destructure the article
    const { title, description, image, link, author, postedDate, minutesToRead, hasAudioAvailable, memberPreview } = articleInfo
    console.log(image)
    const sectionImg = section+'-img'
    
    return(
        <div className={section} onClick={() => {window.open(link,'_blank','noreferrer')}}> 
            <ArticleImage imgUrl={image} section={sectionImg}/>
            <ArticlePreview title={title} description={description} audio={hasAudioAvailable} memberPreview={memberPreview} section={section}/>
            <ArticleAuthor author={author} postedDate={postedDate} minutesToRead={minutesToRead} section={section}/>
        </div>
    );
}

Article.propTypes = {
    articleInfo: PropTypes.object.isRequired,
    section: PropTypes.string.isRequired
}

export default Article;

/*
How this is used:
import Article from '../articleWriter'
<Article key={i} articleInfo={article} section={section} />
*/