import React from 'react';
import { ActivityCard } from '../components/ActivityCard';

export default { title: 'Activity Card' };

export const emptyActivity = () => <ActivityCard />;

export const populatedActivityCard = () => {
  const singleActivity = {
    name: 'ROM',
    description:
      "Stories description text to build on the card title and make up the bulk of the card's content.",
    img_url: '/img/activityImg.jpg',
    rating: 4,
    category: 'Test',
    url: 'http://example.org'
  };

  return (
    <ActivityCard
      name={singleActivity.name}
      description={singleActivity.description}
      img_url={singleActivity.img_url}
      rating={singleActivity.rating}
      category={singleActivity.category}
      url={singleActivity.url}
    />
  );
};
