import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

const QuoteList = ({ quotes }) => (
  <ul aria-label="quotes">
    {quotes.map((quote) => (
      <li key={quote.id}>
        <Quote {...quote} />
      </li>
    ))}
  </ul>
);

QuoteList.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};
export default QuoteList;
