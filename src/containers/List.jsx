// import React, { Component } from 'react';
// import { fetchQuotes } from '../services/quotesAPI';

// export default class QuoteContainer extends Component {
//   state = {
//     loading: true,
//     quotes: []
//   };

//   async componentDidMount() {
//     const quotes = await fetchQuotes();
//     this.setState({ quotes, loading: false });
//   }
//   render() {
//     const { loading, quotes } = this.state;

//     if(loading) return <img src="https://i.gifer.com/origin/dd/ddf7f7a64ed9ea48e8e8afa67d8f892a_w200.gif" alt="Hypnotoad loading spinner" />;

//     return (
//       <div>
//         <ul aria-label="quotes">
//           {quotes.map((quote) => (
//             <li key={quote.character + quote.quote}>{quote.quote}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
