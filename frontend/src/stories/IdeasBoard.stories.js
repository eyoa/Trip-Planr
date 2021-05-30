import { IdeasBoard } from '../components/IdeasBoard/IdeasBoard';

export default { title: 'Ideas List' };

const trip_id = 1;

export const noTripsSelected = () => <IdeasBoard />;
export const noIdeas = () => <IdeasBoard trip_id={trip_id} />;

export const populatedTrips = () => {
  const ideasList = [
    {
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
    },
    {
      votes: '2',
      activity: {
        name: 'something',
        description:
          "Stories description text to build on the card title and make up the bulk of the card's content.",
        img_url: '/img/rom.jpeg',
        rating: 4,
        category: 'Test',
        url: 'http://example.org'
      }
    },
    {
      votes: 1,
      notes: 'some notes here',
      activity: {
        name: 'Eat',
        description:
          "Stories description text to build on the card title and make up the bulk of the card's content.",
        img_url: '/img/rom.jpeg',
        rating: 4,
        category: 'Test',
        url: 'http://example.org'
      }
    }
  ];

  return <IdeasBoard ideasList={ideasList} />;
};
