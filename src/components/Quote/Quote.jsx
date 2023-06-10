import React, { useEffect, useState } from 'react';
import './Quote.css';

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = 't7NPmfG79NvtQx1LkBKMYA==y9g5hL38XGJ9q69P';
  const url = 'https://api.api-ninjas.com/v1/quotes';

  useEffect(() => {
    const getQuote = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            'X-Api-Key': apiKey,
          },
        });
        const data = await response.json();
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      } catch (error) {
        setError(error);
      }
    };
    getQuote();
  }, []);

  if (!quote) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops! Something went wrong!</div>;
  }
  return (
    <div className="quote">
      <h1>
        {quote} - {author}
      </h1>
    </div>
  );
};

export default Quote;
