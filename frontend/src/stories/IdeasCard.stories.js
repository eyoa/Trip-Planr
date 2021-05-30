import React from 'react';
import { IdeaCard } from '../components/IdeasBoard/IdeaCard';

export default { title: 'Ideas Card' };

export const emptyIdea = () => <IdeaCard />;

export const populatedActivityCard = () => {
  const singleIdea = {
    votes: 1,
    notes: 'some notes here',
    activity: {
      name: 'ROM',
      description:
        "Stories description text to build on the card title and make up the bulk of the card's content.",
      img_url: '/img/rom.jpeg',
      rating: 4,
      category: 'Test',
      url: 'http://example.org'
    }
  };

  return (
    <IdeaCard
      votes={singleIdea.votes}
      name={singleIdea.activity.name}
      img_url={singleIdea.activity.img_url}
      start_time={singleIdea.activity.start_time}
      end_time={singleIdea.activity.end_time}
      description={singleIdea.activity.description}
      url={singleIdea.activity.url}
    />
  );
};
