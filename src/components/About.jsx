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
          title: 'From the Desk of Tonmoy, Founder , Wild Agriculture',
          image: 'https://res-console.cloudinary.com/drfaap8zj/thumbnails/v1/image/upload/v1716616910/c2FtcGxlcy9XaWxkQWdyaWN1bHR1cmUva3JsZmtqYnBuZ2Z3bnhyZm5ieWg=/template_primary/Y19maWxsLHdfODU5LGhfMTE0NSxhcl8zOjQ=',
          description: "It's Tonmoy here, CEO of Wild Agriculture  ,If you're passionate about sustainability, delicious food, and the raw power of nature, then keep an eye on Wild Agriculture. We're just getting started, and we're always looking for people who share our vision of a wilder, more delicious future Onward to the wild side!"
        },
        {
          id: 2,
          title: 'AI advancements in 2024',
          image: 'https://res.cloudinary.com/drfaap8zj/image/upload/c_fill,w_859,h_1145,ar_3:4/v1716616909/samples/WildAgriculture/r5avaavjmkfexeb7w1pd.jpg',
          description: 'A look at the most significant AI advancements in the past year, and what we can expect in the future.'
        },
        {
          id: 3,
          title: 'Sustainable farming practices',
          image: 'https://flowbite.com/docs/images/blog/image-3.jpg',
          description: 'An overview of sustainable farming practices and their impact on the environment.'
        },
        // Add more cards as needed
        {
          id: 4,
          title: 'Work in Progress',
          image: 'https://flowbite.com/docs/images/blog/image-3.jpg',
          description: 'An overview of sustainable farming practices and their impact on the environment.'
        },
        {
          id: 5,
          title: 'Test ',
          image: 'https://flowbite.com/docs/images/blog/image-3.jpg',
          description: 'An overview of sustainable farming practices and their impact on the environment.'
        },
        {
          id: 6,
          title: 'Wild Agriculture ',
          image: 'https://flowbite.com/docs/images/blog/image-3.jpg',
          description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'
        },
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
