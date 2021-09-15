import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchOneCharactersQuotes } from '../services/quotesAPI';
import '../components/styles/Detail.css';
import Character from '../components/quotes/Character';

const DetailContainer = () => {
  const { character }  = useParams();
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOneCharactersQuotes(character)
      .then((quotes) => setQuotes(quotes))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main data-testid="quote-detail">
      <Link to="/">Home</Link>
      {loading ? <img src="https://i.gifer.com/origin/dd/ddf7f7a64ed9ea48e8e8afa67d8f892a_w200.gif" alt="Hypnotoad loading spinner" /> : <><h1 className="name">{character}</h1><Character quotes={quotes} /></>}
    </main>
  );
};

export default DetailContainer;
