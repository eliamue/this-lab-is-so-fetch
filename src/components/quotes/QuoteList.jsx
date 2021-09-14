import React from 'react';
import PropTypes from 'prop-types';

const QuoteList = ({ quotes }) => <ul aria-label="quotes"></ul>;

QuoteList.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
export default QuoteList;
