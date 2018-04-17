import React, { Component } from 'react';
import { connect } from 'react-redux';

class PublishingApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    let articlesJSX = [];
    for (let articleKey in this.props) {
      const articleDetails = this.props[articleKey];
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

const mapStateToProps = state => ({
  ...state,
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PublishingApp);
