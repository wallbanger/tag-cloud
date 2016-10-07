import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import style from './TagItem.scss';

class TagItem extends Component {
  render() {
    const { label, sentimentScore, id } = this.props.tag;
    const fontSize = {
      fontSize: sentimentScore / 3 + 'px'
    };

    return(
        <span>
          <Link className="tag-item" to={`tag/${id}`} style={fontSize}>{label}</Link>
        </span>
    )
  }
}

export default TagItem;
