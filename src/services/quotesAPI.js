// export const formatQuotes = (json) =>
//   json.map((quote) => ({
//     name: quote.character,
//     quote: quote.quote,
//     image: quote.image,
//   }));

export const fetchQuotes = async () => {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
  const { results } = await res.json();

  return results;
};

export const fetchSingleQuote = async (character) => {
  const res = await fetch(
    `https://futuramaapi.herokuapp.com/api/characters/${character}`
  );

  return res.json;
};
