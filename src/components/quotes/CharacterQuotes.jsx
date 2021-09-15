import React from 'react';
import PropTypes from 'prop-types';

const CharacterQuotes = ({ quote, character, image }) => (
  <figure>
    <img src={image} alt={character} className="char" />
    <figcaption>
      &quot;{quote}&quot;
    </figcaption>
  </figure>
);

CharacterQuotes.propTypes = {
  quote: PropTypes.string,
  character: PropTypes.string,
  image: PropTypes.string
};

export default CharacterQuotes;
