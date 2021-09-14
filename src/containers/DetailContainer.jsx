import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Quote from '../components/quotes/Quote';
import { fetchQuotes } from '../services/quotesAPI';

const DetailContainer = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuotes(id)
      .then((character) => setCharacter(character))
      .finally(() => setLoading(false));
  }, [character]);

  return (
    <main data-testid="character-detail">
      <Link to="/">Home</Link>
      {loading ? <h1>Loading Character</h1> : <Quote {...character} />}
    </main>
  );
};

export default DetailContainer;
