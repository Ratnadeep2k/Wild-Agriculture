import React, { useEffect, useState } from 'react';
import Card from './Card';
import Skl from '../utils/Skl';

function About() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setCards([
        {
          id: 1,
          title: 'Noteworthy technology acquisitions 2021',
          image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
          description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
        },
        {
          id: 2,
          title: 'AI advancements in 2024',
          image: 'https://flowbite.com/docs/images/blog/image-2.jpg',
          description: 'A look at the most significant AI advancements in the past year, and what we can expect in the future.'
        },
        {
          id: 3,
          title: 'Sustainable farming practices',
          image: 'https://flowbite.com/docs/images/blog/image-3.jpg',
          description: 'An overview of sustainable farming practices and their impact on the environment.'
        },
        // Add more cards as needed
      ]);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skl key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <Card key={card.id} title={card.title} image={card.image} description={card.description} />
          ))}
        </div>
      )}
    </div>
  );
}

export default About;
