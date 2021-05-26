import './App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { ExploreListToggle } from './components/ExploreList/ExploreListToggle';
import { ExploreList } from './components/ExploreList/ExploreList';
import { TripDetailsToggle } from './components/TripDetails/TripDetailsToggle';
import { TripDetails } from './components/TripDetails/TripDetails';
import { Homepage } from './components/Homepage';
import { Mapview } from './components/Mapview';
import { TripList } from './components/TripList';

//Test Data
const cityData = [
  {
    id: 1,
    name: 'Montreal'
  },
  {
    id: 2,
    name: 'New York'
  },
  {
    id: 3,
    name: 'Croatia'
  },
  {
    id: 4,
    name: 'Hong Kong'
  },
  {
    id: 5,
    name: 'Toronto'
  }
];

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
    name: 'ROM5',
    description:
      "Stories description text to build on the card title and make up the bulk of the card's content.",
    img_url: '/img/rom.jpeg',
    rating: 4,
    category: 'Test',
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
          },
          {
            name: 'Restaurant',
            img_url: '/img/activityImg.jpg',
            start_time: '6:00pm',
            end_time: '7:00 pm',
            url: 'http://example.org',
            activity_id: 4
          },
          {
            name: 'Restaurant',
            img_url: '/img/activityImg.jpg',
            start_time: '6:00pm',
            end_time: '7:00 pm',
            url: 'http://example.org',
            activity_id: 4
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
            name: 'ROM',
            img_url: '/img/rom.jpeg',
            start_time: '11:00 am',
            end_time: '3:00 pm',
            url: 'http://example.org',
            activity_id: 1
          }
        ]
      }
    ]
  }
];

function App() {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [tripOpen, setTripOpen] = useState(false);

  const exploreListToggleClickHandler = () => {
    setExploreOpen(!exploreOpen);
  };

  const tripToggleClickHandler = () => {
    setTripOpen(!tripOpen);
  };

  let exploreDrawer;
  let tripDrawer;

  if (exploreOpen) {
    exploreDrawer = <ExploreList activityData={exploreList} />;
  }

  if (tripOpen) {
    tripDrawer = <TripDetails tripDetails={trips} />;
  }

  return (
    <main className='app'>
      <Router>
        <Navigation />
        <ExploreListToggle click={exploreListToggleClickHandler} />
        {exploreDrawer}
        <TripDetailsToggle click={tripToggleClickHandler} />
        {tripDrawer}

        <Switch>
          <section className='backdrop'>
            <Route path='/' exact component={Homepage}></Route>
            <Route path='/Mapview' exact component={Mapview}></Route>
            <Route path='/Triplist' exact component={TripList}></Route>
          </section>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
