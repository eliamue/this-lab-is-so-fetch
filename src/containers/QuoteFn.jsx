import React, { useState, useEffect } from 'react';
import QuoteList from '../components/quotes/quoteList';
import { fetchQuotes } from '../services/quotesAPI';

const QuoteyQuotes = () => {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes()
      .then((quotes) => setQuotes(quotes))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading</h1>;

  return <QuoteList quotes={quotes} />;
};
export default QuoteyQuotes;
