export const fetchQuotes = async () => {
  const res = await fetch('https://link.com');
  const { results } = await res.json();

  return results;
};
