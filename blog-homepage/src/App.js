import React from 'react'
import yourArticles from './json-articles/your-articles.json';
import missedArticles from './json-articles/missed-articles.json';
import ForYouSection from './section-writer/ForYouSection';
import MissedArticleSection from './section-writer/MissedArticleSection';

function App() {
  return (
    <div className="App">
      <ForYouSection
        yourArticles={yourArticles}
      />
      <MissedArticleSection
        missedArticles={missedArticles}
      />
    </div>
  );
}

export default App;
