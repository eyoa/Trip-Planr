import { TripDetails } from '../components/TripDetails/TripDetails';

export default { title: 'TripDetails' };

export const noTrips = () => <TripDetails />;

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
              name: 'ROM',
              img_url: '/img/rom.jpeg',
              start_time: '11:00 am',
              end_time: '3:00 pm',
              url: 'http://example.org',
              activity_id: 1
            },
            {
              name: 'Restaurant',
              img_url: '/img/activityImg.jpg',
              start_time: '6:00pm',
              end_time: '7:00 pm',
              url: 'http://example.org',
              activity_id: 4
            }
          ]
        },
        {
          name: 'Day2',
          order: 1,
          entries: [
            {
              name: 'Another Restaurant',
              img_url: '/img/activityImg.jpg',
              start_time: '11:00am',
              end_time: '3:00 pm',
              url: 'http://example.org'
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

  return <TripDetails tripDetails={trips} />;
};
