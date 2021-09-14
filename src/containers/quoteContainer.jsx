import React, { useState, useEffect } from 'react';
import QuoteList from '../components/quotes/quoteList';
import { fetchQuotes } from '../services/quotesAPI';

const QuoteContainer = () => {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes()
      .then((quotes) => setQuotes(quotes))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <>
    <img
      src="https://i.gifer.com/origin/dd/ddf7f7a64ed9ea48e8e8afa67d8f892a_w200.gif"
      alt="Hypnotoad loading spinner"
    />
  </>;
  return <QuoteList quotes={quotes} />;
};

export default QuoteContainer;
