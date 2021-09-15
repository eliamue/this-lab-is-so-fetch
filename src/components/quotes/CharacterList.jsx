import React from 'react';
import PropTypes from 'prop-types';
import CharacterQuotes from './CharacterQuotes';
import { Link } from 'react-router-dom';

const CharacterList = ({ quotes }) => (
  <ul aria-label="quotes">
    {quotes.map((quote) => (
      <li key={quote.quote}>
        <Link to={`/${quote.character}`}>{quote.character}</Link>
        <CharacterQuotes {...quote} />
      </li>
    ))}
  </ul>
);

CharacterList.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      character: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};
export default CharacterList;
