import PropTypes from 'prop-types';

export default PropTypes.shape({
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  tags: PropTypes.array,
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string,
});
