import React, { Component, PropTypes } from 'react';
import TagItem from './TagItem';

class TagList extends Component {
  render() {
    const item = this.props.data.map((tag) =>
        <TagItem key={tag.id} tag={tag}/>);
    
    return (
      <div>
        {item}
      </div>
    );
  }
}

TagList.propTypes = {
  data: PropTypes.array,
};

export default TagList;
