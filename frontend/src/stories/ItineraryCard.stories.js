import React from 'react';
import { ItineraryCard } from '../components/TripDetails/ItineraryCard';

export default { title: 'Itinerary Card' };

export const emptyActivity = () => <ItineraryCard />;

export const populatedActivityCard = () => {
  const singleActivity = {
    name: 'ROM',
    img_url: '/img/rom.jpeg',
    start_time: '11:00 am',
    end_time: '3:00 pm',
    url: 'http://example.org'
  };

  return (
    <ItineraryCard
      name={singleActivity.name}
      img_url={singleActivity.img_url}
      start_time={singleActivity.start_time}
      end_time={singleActivity.end_time}
      url={singleActivity.url}
    />
  );
};
