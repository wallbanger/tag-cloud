import TagPage from '../components/TagPage'
import connect from '../../../utils/connect';
import data from '../../../data/data';

const mapStateToProps = ownProps => {
  const tag = data.find(item => {
    return item.id === ownProps.params.tagId;
  });

  return { tag };
};

export default connect(mapStateToProps)(TagPage);
