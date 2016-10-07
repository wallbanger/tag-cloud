import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './style.scss';

class TagPage extends Component {
  render() {
    const tag = this.props.tag;
    const negativeMentions = isNumeric(tag.sentiment.negative);
    const neutralMentions = isNumeric(tag.sentiment.neutral);
    const positiveMentions = isNumeric(tag.sentiment.positive);
    const totalMentions = negativeMentions + neutralMentions + positiveMentions;
    const pageTypes = Object.keys(tag.pageType).map(function(key) {
      return <span className="pagetype" key={key}>{key}: {tag.pageType[key]}</span>;
    });

    return(
      <div>
        <h1>Label: {tag.label}</h1>
        <h5>Total mentions: <span>{totalMentions}</span></h5>
        <h5>Neutral mentions: <span>{neutralMentions}</span></h5>
        <h5>Positive mentions: <span>{positiveMentions}</span></h5>
        <h5>Negative mentions: <span>{negativeMentions}</span></h5>
        <div>{pageTypes}</div>
        <Link className="close" to="/">X</Link>
      </div>
    )
  }
}

function isNumeric(n) {
  if(typeof n == 'number') {
    return parseInt(n);
  } else {
    return 0;
  }
}

TagPage.propTypes = {
  tag: PropTypes.object.isRequired,
};

export default TagPage;
