import React from 'react';
import { ExploreList } from '../components/ExploreList/ExploreList';

export default { title: 'Explore List' };

export const emptyExploreList = () => <ExploreList />;

export const populatedActivityCard = () => {
  const exploreList = [
    {
      name: 'ROM',
      description:
        "Stories description text to build on the card title and make up the bulk of the card's content.",
      img_url: '/img/rom.jpeg',
      rating: 4,
      category: 'Test',
      url: 'http://example.org'
    },
    {
      name: 'ROM',
      description:
        "Stories description text to build on the card title and make up the bulk of the card's content.",
      img_url: '/img/activityImg.jpg',
      rating: 4,
      category: 'Test',
      url: 'http://example.org'
    },
    {
      name: 'ROM2',
      description:
        "Stories description text to build on the card title and make up the bulk of the card's content.",
      img_url: '/img/rom.jpeg',
      rating: 4,
      category: 'Test',
      url: 'http://example.org'
    },
    {
      name: 'ROM3',
      description:
        "Stories description text to build on the card title and make up the bulk of the card's content.",
      img_url: '/img/activityImg.jpg',
      rating: 4,
      category: 'Test',
      url: 'http://example.org'
    },
    {
      name: 'ROM4',
      description:
        "Stories description text to build on the card title and make up the bulk of the card's content.",
      img_url: '/img/activityImg.jpg',
      rating: 4,
      category: 'Test',
      url: 'http://example.org'
    }
  ];

  return <ExploreList activityData={exploreList} />;
};
