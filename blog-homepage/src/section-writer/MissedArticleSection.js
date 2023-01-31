import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from './SectionHeader'
import Article from '../article-writer/ArticleWriter'

function MissedArticleSection({ missedArticles }) {
    //For each article in the argument array, render an article 
    const articleList = missedArticles.map((article,i) => <Article key={i} articleInfo={article} section={'missed-articles'} />)

    return(
        <div>
            <SectionHeader section='missed'/>
            {articleList}
        </div>
    );
}

MissedArticleSection.propTypes = {
    missedArticles: PropTypes.array.isRequired,
}

export default MissedArticleSection