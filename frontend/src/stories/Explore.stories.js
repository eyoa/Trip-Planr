import React from 'react';
import { ExploreList } from '../components/ExploreList';

export default { title: 'Explore List' };

export const emptyExploreList = () => <ExploreList />;

export const populatedActivityCard = () => {
  const exploreList = {
    name: 'ROM',
    description:
      "Stories description text to build on the card title and make up the bulk of the card's content.",
    img_url: '/img/activityImg.jpg',
    rating: 4,
    category: 'Test',
    url: 'http://example.org'
  };

  return <ExploreList />;
};
