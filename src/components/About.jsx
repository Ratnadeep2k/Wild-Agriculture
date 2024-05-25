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
          image: 'https://res.cloudinary.com/drfaap8zj/image/upload/c_fill,w_859,h_1145,ar_3:4/v1716616910/samples/WildAgriculture/krlfkjbpngfwnxrfnbyh.jpg',
          description: "It's Tonmoy here, CEO of Wild Agriculture  ,If you're passionate about sustainability, delicious food, and the raw power of nature, then keep an eye on Wild Agriculture. We're just getting started, and we're always looking for people who share our vision of a wilder, more delicious future Onward to the wild side!"
        },
        {
          id: 2,
          title: 'Fisheries: From Catch to Conservation',
          image: 'https://res.cloudinary.com/drfaap8zj/image/upload/c_fill,w_859,h_1145,ar_3:4/v1716616909/samples/WildAgriculture/r5avaavjmkfexeb7w1pd.jpg',
          description: 'Fisheries are the lifeblood of aquatic ecosystems, encompassing both the act of harvesting fish and other aquatic life and the places where this happens. It is a vast industry that plays a crucial role in our world.          '
        },
        {
          id: 3,
          title: 'Sustainable farming practices',
          image: 'https://res.cloudinary.com/drfaap8zj/image/upload/v1716616908/samples/WildAgriculture/ebsgmrj45uw7fqqrfufd.jpg',
          description: 'Sustainable farming practices are all about growing food in a way that meets the needs of the present without compromising the ability of future generations to meet their own needs. It is a delicate balance between productivity, environmental health, and social responsibility. Here are some key sustainable farming practices'
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
