import { TripList } from '../components/TripList';

export default { title: 'TripList' };

export const noTrips = () => <TripList />;

export const populatedTrips = () => {
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
      name: 'ROM2',
      description:
        "Stories description text to build on the card title and make up the bulk of the card's content.",
      img_url: '/img/activityImg.jpg',
      rating: 4,
      category: 'Test',
      url: 'http://example.org'
    },
    {
      name: 'ROM3',
      description:
        "Stories description text to build on the card title and make up the bulk of the card's content.",
      img_url: '/img/rom.jpeg',
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
    },
    {
      name: 'Restaurant',
      description: 'Some food place.',
      img_url: '/img/activityImg.jpg',
      rating: 5,
      category: 'Food',
      url: 'http://example.org'
    }
  ];
  const trips = [
    {
      name: 'Toronto meetup',
      user_id: 2,
      start_date: '',
      end_date: '',
      collaborators: [1, 5],
      days: [
        {
          name: 'Day1',
          order: 1,
          entries: [
            {
              activity_id: 1,
              start_time: '11:00am',
              end_time: '3:00pm'
            },
            {
              activity_id: 5,
              start_time: '3:00pm',
              end_time: '5:00pm'
            }
          ]
        },
        {
          name: 'Day2',
          order: 1,
          entries: [
            {
              activity_id: 3
            }
          ]
        }
      ]
    },
    {
      name: 'Toronto Cousins',
      user_id: 2,
      start_date: '',
      end_date: '',
      collaborators: [],
      days: [
        {
          name: 'Day1',
          order: 1,
          entries: [
            {
              activity_id: 5,
              start_time: '11:00am',
              end_time: '3:00pm'
            }
          ]
        }
      ]
    }
  ];

  return <TripList tripDetails={trips} />;
};
