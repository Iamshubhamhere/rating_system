import React, { useState } from 'react'
import Star from './Star'

function StarRating() {
  const [rating, setRating] = useState('');
  const [presentIndex, setPresentIndex] = useState(-1);

  function updateRating(value, index) {
    setRating(value);
    setPresentIndex(index);
  }

  const text = [
    'Oops!',
    'Not bad',
    'Good job!',
    'Excellent!',
    'Outstanding !'
  ];

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