import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from './SectionHeader'
import Article from '../article-writer/ArticleWriter'

function ForYouSection({ yourArticles }) {
    //For each article in the argument array, render an article 
    const articleList = yourArticles.map((article,i) => <Article key={i} articleInfo={article} section={'your-articles'} />)

    return(
        <div>
            <SectionHeader section='for-you'/>
            {articleList}
        </div>
    );
}

ForYouSection.propTypes = {
    yourArticles: PropTypes.array.isRequired,
}

export default ForYouSection