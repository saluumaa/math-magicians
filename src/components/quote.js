import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=hope', {
          headers: {
            'X-Api-Key': 'yo11TOYHBsIT9NOEJduWTw==qBYvxBvXeP4EyxcO',
          },
        });
        const data = await response.json();
        setQuote(`${data[0].quote} by ${data[0].author} `);
        setLoading(false);
      } catch (error) {
        setError('Not able to get data');
        setLoading(true);
      }
    };
    fetchQuote();
  }, []);

  if (loading) {
    return (
      <p>Please wait .....</p>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="quotewrapper">
      <p className="quotegenerator">{quote}</p>
    </div>
  );
};

export default Quote;
