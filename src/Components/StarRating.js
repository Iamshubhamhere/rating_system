import React, { useState } from 'react'
import Star from './Star'

function StarRating() {
  const [rating, setRating] = useState('');
  const [presentIndex, setPresentIndex] = useState(-1);

  const text = [
    'Oops!',
    'Not bad',
    'Good job!',
    'Excellent!',
    'Outstanding !'
  ];

  function updateRating(value, index) {
    setRating(value);
    setPresentIndex(index);
  }

  return (
    <section className='center'>
      <div>
        {text.map((v, i) => (
          <Star
            key={i}
            funct={() => updateRating(v, i)}
            isClickable={i <= presentIndex}
          />
        ))}
      </div>
      <h2>{rating}</h2>
    </section>
  )
}

export default StarRating