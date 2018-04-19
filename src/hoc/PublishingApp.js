import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import falcorModel from '../falcorModel';
import articleActions from '../actions/article';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  articleActions: bindActionCreators(articleActions, dispatch),
});

class PublishingApp extends React.Component {
  componentWillMount() {
    this.fetch();
  }

  async fetch() {
    const articlesLength = await falcorModel.getValue('articles.length').then(length => length);

    const articles = await falcorModel
      .get([
        'articles',
        { from: 0, to: articlesLength - 1 },
        ['id', 'articleTitle', 'articleContent'],
      ])
      .then(articlesResponse => articlesResponse.json.articles);

    this.props.articleActions.articlesList(articles);
  }

  // below here are next methods o the PublishingApp
  render() {
    const articlesJSX = [];
    for (const articleKey in this.props.article) {
      const articleDetails = this.props.article[articleKey];
      const currentArticleJSX = (
        <div key={articleKey}>
          <h2>{articleDetails.articleTitle}</h2>
          <h3>{articleDetails.articleContent}</h3>
        </div>
      );
      articlesJSX.push(currentArticleJSX);
    }

    return (
      <div>
        <h1>Our publishing app</h1>
        {articlesJSX}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishingApp);
