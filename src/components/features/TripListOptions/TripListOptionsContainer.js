import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeDurationFrom, changeDurationTo, addTag, removeTag} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeDurationTo: payload => dispatch(changeDurationTo(payload)),
  changeDurationFrom: payload => dispatch(changeDurationFrom(payload)),
  addTag: payload => dispatch(addTag(payload)),
  removeTag: payload => dispatch(removeTag(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
