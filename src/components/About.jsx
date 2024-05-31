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
          title: 'Foraging: A Foundational Pillar of Wild Agriculture',
          image: 'https://res.cloudinary.com/drfaap8zj/image/upload/v1716619969/samples/WildAgriculture/ssu8rbdlv8gtpoxt2rid.jpg',
          description: 'For Wild Agriculture, foraging isnt just a trend, its a core principle. Its about reconnecting with the wild bounty that nature offers and celebrating the traditional practices of indigenous communities who have harvested these foods for generations.'
        },
        {
          id: 5,
          title: 'Keeping Our World Clean: A Look at Environmental Cleaning',
          image: 'https://res.cloudinary.com/drfaap8zj/image/upload/v1716620361/samples/WildAgriculture/e3dlefv16gvhd9e7tscl.jpg',
          description: 'Environmental cleaning goes far beyond the everyday act of tidying up your home. Its a broad term encompassing various practices aimed at protecting and restoring the natural world from pollution and contamination'
        },
        {
          id: 6,
          title: 'The Sunset: A Farewell in Flames',
          image: 'https://res.cloudinary.com/drfaap8zj/image/upload/v1716616907/samples/WildAgriculture/ya2ta4lukw9hw0tezzwn.jpg',
          description: 'Sunsets are a blaze of glory, a poignant reminder of the days end. The sun, a giant ball of fire, dips towards the horizon, casting long shadows across the landscape. The sky transforms into a canvas, ablaze with oranges, reds, pinks, and purples.'
        },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-serif">
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
