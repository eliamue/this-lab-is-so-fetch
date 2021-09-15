import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ quotes }) => (
  <ul aria-label="quotes">
    {quotes.map((quote) => (
      <li key={quote.quote}>
        <p className="quotes">&quot;{quote.quote}&quot;</p>
      </li>
    ))}
  </ul>
);

Character.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      character: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};
export default Character;
