import './App.scss';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
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

function App() {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [tripOpen, setTripOpen] = useState(false);
  const [tripList, setTripList] = useState([]);
  // const [tripDetails, setTripDetails] = useState({});

  useEffect(() => {
    return axios.get(`/trips`).then((res) => {
      setTripList(res.data);
    });
  }, []);
  console.log(tripList);
  // useEffect(() => {
  //   const details = tripDetailsCallback();
  //   setTripDetails(details);
  // }, [tripDetails, tripDetailsCallback]);

  const exploreListToggleClickHandler = () => {
    setExploreOpen(!exploreOpen);
  };

  const tripToggleClickHandler = () => {
    setTripOpen(!tripOpen);
  };

  // function getTripList() {
  //   const data = '';
  //   return axios.get(`/trips`).then((res) => {
  //     if (res.status === 204) {
  //       const (data) => res.data;
  //     }
  //   });
  // }

  // function getTripDetails(id) {
  //   return axios.get(`/trips/${id}`).then((res) => {
  //     if (res.status === 204) {
  //       const details = res.data
  //       setTripDetails(res.data);
  //     }
  //   });
  // }

  const tripDetailsCallback = useCallback(function (data) {
    return data;
  });

  let exploreDrawer;
  let tripDrawer;

  if (exploreOpen) {
    exploreDrawer = <ExploreList activityData={exploreList} />;
  }

  if (tripOpen) {
    tripDrawer = (
      <TripDetails
        tripList={tripList}
        // getTripDetails={getTripDetails}
        // tripDetails={tripDetails}
      />
    );
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
