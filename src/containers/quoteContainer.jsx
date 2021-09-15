import React, { useState, useEffect } from 'react';
import CharacterList from '../components/quotes/CharacterList';
import { fetchCharacters } from '../services/quotesAPI';

const QuoteContainer = () => {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then((quotes) => setQuotes(quotes))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <>
        <img
          src="https://i.gifer.com/origin/dd/ddf7f7a64ed9ea48e8e8afa67d8f892a_w200.gif"
          alt="Hypnotoad loading spinner"
        />
      </>
    );
  return (
    <>
      <h1>Futurama Characters</h1>
      <CharacterList quotes={quotes} />
    </>
  );
};
export default QuoteContainer;
