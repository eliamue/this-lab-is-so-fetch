import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, name, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      {quote} - {name}
    </figcaption>
  </figure>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string
};
