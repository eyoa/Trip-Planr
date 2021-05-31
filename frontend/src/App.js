import './App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigation } from './components/Navigation';
import { ExploreListToggle } from './components/ExploreList/ExploreListToggle';
import { ExploreList } from './components/ExploreList/ExploreList';
import { TripDetailsToggle } from './components/TripDetails/TripDetailsToggle';
import { TripDetails } from './components/TripDetails/TripDetails';
import { Homepage } from './components/Homepage';
import { Mapview } from './components/Mapview';
import { IdeasBoard } from './components/IdeasBoard/IdeasBoard';
import { TripList } from './components/TripList';

//Test Data

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
  const [ideasList, setIdeasList] = useState([]);
  const [selectTrip, setSelectTrip] = useState(null);
  const [tripData, setTripData] = useState(null);

  // Initial data/state
  useEffect(() => {
    return axios.get(`/trips`).then((res) => {
      setTripList(res.data);
    });
  }, []);

  // //update the trip List
  // useEffect(() => {
  //   return axios.get(`/trips`).then((res) => {
  //     setTripList(res.data);
  //   });
  // }, [tripList]);

  //update when selecting itinerary
  useEffect(() => {
    if (selectTrip !== null) {
      axios.get(`/trips/${selectTrip}`).then((res) => {
        setTripData(res.data);
      });
    }
  }, [selectTrip]);

  const tripSelectHandler = (eventKey) => {
    setSelectTrip(eventKey);
  };

  const addCustomIdea = (newIdeaData) => {
    console.log(newIdeaData);
  };

  const exploreListToggleClickHandler = () => {
    setExploreOpen(!exploreOpen);
  };

  const tripToggleClickHandler = () => {
    setTripOpen(!tripOpen);
  };

  const addNewTrip = (start_date, end_date, name, user_id) => {
    const obj = {
      name,
      user_id,
      start_date,
      end_date
    };

    axios.post(`/trips`, null, { params: obj }).then((res) => {
      setTripList([...tripList, res.data]);
    });
  };

  const removeTrip = (event) => {
    const id = event.target.value;
    // axios.delete(`/trips/${id}`).then((res) => {
    //   console.log(res);
    //   // setTripList([...tripList, res.data]);
    // });
  };

  let exploreDrawer;
  let tripDrawer;

  if (exploreOpen) {
    exploreDrawer = <ExploreList activityData={exploreList} />;
  }

  if (tripOpen) {
    tripDrawer = (
      <TripDetails
        tripList={tripList}
        selectTrip={selectTrip}
        tripData={tripData}
        tripSelectHandler={tripSelectHandler}
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
            <Route
              path='/TripList'
              render={() => (
                <TripList
                  tripList={tripList}
                  addNewTrip={addNewTrip}
                  removeTrip={removeTrip}
                />
              )}
            />
            <Route
              path='/IdeasBoard'
              render={() => (
                <IdeasBoard
                  ideasList={ideasList}
                  addCustomIdea={addCustomIdea}
                  trip_id={selectTrip}
                />
              )}
            ></Route>
          </section>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
