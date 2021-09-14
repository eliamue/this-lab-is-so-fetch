import React, { Component } from 'react';
import { fetchQuotes } from '../services/quotesAPI';

export default class QuoteContainer extends Component {
  state = {
    loading: true,
    quotes: []
  };

  async componentDidMount() {
    const quotes = await fetchQuotes();
    this.setState({ quotes, loading: false });
  }
  render() {
    const { loading, quotes } = this.state;

    if(loading) return <h1>Loading</h1>;

    return (
      <div>
        <ul aria-label="quotes">
          {quotes.map((quote) => (
            <li key={quote.character + quote.quote}>{quote.quote}</li>
          ))}
        </ul>
      </div>
    );
  }
}
