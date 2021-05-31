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
import { eachDayOfInterval, format } from 'date-fns/esm';

function App() {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [tripOpen, setTripOpen] = useState(false);
  const [tripList, setTripList] = useState([]);
  const [exploreList, setExploreList] = useState([]);
  const [selectTrip, setSelectTrip] = useState(null);
  const [tripData, setTripData] = useState({
    itinerary: null,
    ideasList: null
  });

  // Initial data/state
  useEffect(() => {
    axios.get(`/trips`).then((res) => {
      setTripList(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`/activities`).then((res) => {
      setExploreList(res.data);
    });
  }, []);

  //update when selecting trip
  useEffect(() => {
    if (selectTrip !== null) {
      Promise.all([
        axios.get(`/trips/${selectTrip}`),
        axios.get(`/trips/${selectTrip}/ideas`)
      ]).then(([itinerary, ideasList]) => {
        setTripData({
          itinerary: itinerary.data,
          ideasList: ideasList.data
        });
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

  const numDaysHelper = (start_date, end_date, trip_id) => {
    const numDays = eachDayOfInterval({
      start: start_date,
      end: end_date
    });

    const daysArr = numDays.map((day, index) => {
      const dayObj = {
        name: format(day, 'MMM do (eee)'),
        order: index,
        trip_id
      };
      return dayObj;
    });
    console.log(daysArr);
    return daysArr;
  };

  const addNewTrip = (start_date, end_date, name, user_id) => {
    const obj = {
      name,
      user_id,
      start_date,
      end_date
    };

    axios.post(`/trips`, null, { params: obj }).then((res) => {
      const newtrip = res.data;
      const daysArr = numDaysHelper(start_date, end_date, newtrip.id);

      const requests = daysArr.map((day) =>
        axios
          .post(`/trips/${day.trip_id}/days`, null, { params: day })
          .catch((err) => console.log(err))
      );

      console.log(requests);

      Promise.all([requests])
        .then((res) => {
          console.log(`Days added and ${res[0].data}`);
          setTripList([...tripList, this.newTrip]);
        })

        .catch((errors) => console.log(errors));
    });
  };

  const removeTrip = (event) => {
    const id = event.target.value;
    axios.delete(`/trips/${id}`).then((res) => {
      setTripList(res.data);
    });
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
        tripData={tripData.itinerary}
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
                  ideasList={tripData.ideasList}
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
