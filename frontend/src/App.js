import './App.scss';

import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ExploreListToggle } from './components/ExploreList/ExploreListToggle';
import { ExploreList } from './components/ExploreList/ExploreList';
import { TripDetailsToggle } from './components/TripDetails/TripDetailsToggle';
import { TripDetails } from './components/TripDetails/TripDetails';
import { Homepage } from './components/Homepage';
import { Mapview } from './components/Mapview';
import { IdeasBoard } from './components/IdeasBoard/IdeasBoard';
import { TripList } from './components/TripList';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { eachDayOfInterval, format } from 'date-fns/esm';

function App() {
  const [userState, setUserState] = useState({ isLoggedIn: false, user: {} });
  const [loginForm, setloginForm] = useState({
    username: '',
    email: '',
    password: '',
    profile_url: ''
  });
  const [signupForm, setSignupForm] = useState({
    username: '',
    email: '',
    profile_url: '',
    password: '',
    password_confirmation: ''
  });
  const [exploreOpen, setExploreOpen] = useState(false);
  const [tripOpen, setTripOpen] = useState(false);
  const [tripList, setTripList] = useState([]);
  const [exploreList, setExploreList] = useState([]);
  const [selectTrip, setSelectTrip] = useState(null);
  const [activeDay, setActiveDay] = useState({
    day_id: 1,
    dayOrder: 1
  });

  //Mock user_id
  // const user_id = 1;

  const loginStatus = () => {
    axios
      .get('/logged_in', { withCredentials: true })
      .then((res) => {
        if (res.data.logged_in && res.data.user) {
          handleLogin(res);
        } else {
          handleLogout();
        }
      })
      .catch((error) => console.log('error ', error));
  };

  const handleLogin = (data) => {
    if (data.user) {
      setUserState({
        isLoggedIn: true,
        user: data.user
      });
    }
  };

  const handleLogout = () => {
    setUserState({
      isLoggedIn: false,
      user: {}
    });
    setTripData({ itinerary: '', ideasList: '' });
  };

  const [tripData, setTripData] = useState({
    itinerary: { days: [] },
    ideasList: null
  });

  const tripSelectHandler = (eventKey) => {
    setSelectTrip(eventKey);
  };

  const addCustomIdea = (newIdeaData) => {
    console.log('add custom idea');
    console.log(newIdeaData);
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
    return daysArr;
  };

  const ideasHelper = (ideaArr) => {
    if (ideaArr === []) {
      return [];
    }

    const result = ideaArr.map((idea) => {
      idea['activity'] = exploreList.find(
        (actvity) => actvity.id === idea.activity_id
      );
      return idea;
    });

    return result;
  };

  // returns activity object with given activity_id
  const matchActivity = (activity_id) => {
    const result = exploreList.find((actvity) => actvity.id === activity_id);
    return result;
  };

  const loginFormChangeHandler = (event) => {
    const { name, value } = event.target;
    setloginForm({ ...loginForm, [name]: value });
  };

  const signupFormChangeHandler = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setSignupForm({ ...signupForm, [name]: value });
  };

  const submitLoginForm = (event) => {
    console.log('submit Login');
    event.preventDefault();
    const user = { ...loginForm };
    axios.post(`/login`, { user }, { withCredentials: true }).then((res) => {
      if (res.data.logged_in) {
        handleLogin(res.data);
        <Redirect to='/' />;
      } else {
        console.log(res.data.message);
      }
    });
  };

  const submitSignupForm = (event) => {
    event.preventDefault();
    console.log('submit signup');
    const user = { ...signupForm };
    console.log(user);
    axios.post(`/users`, { user }, { withCredentials: true }).then((res) => {
      if (res.data.status === 'created') {
        handleLogin(res.data);
        <Redirect to='/' />;
      } else {
        console.log(res.data.message);
      }
    });
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

      Promise.all([requests])
        .then((res) => {
          axios
            .get(`/trips`, { params: { user_id: userState.user.id } })
            .then((res) => {
              setTripList(res.data);
            });
        })

        .catch((errors) => console.log(errors));
    });
  };

  const removeTrip = (event) => {
    const id = event.target.value;
    axios
      .delete(`/trips/${id}`, { params: { user_id: userState.user.id } })
      .then((res) => {
        setTripList(res.data);
      });
  };

  const selectDay = (day) => {
    const day_id = day;

    const currentDayObj = tripData.itinerary.days.find(
      (dayObj) => dayObj.id === day_id
    );
    const dayOrder = currentDayObj.order;
    setActiveDay({ day_id, dayOrder });
  };

  const suggestActivity = (e, activity_id) => {
    e.stopPropagation();

    if (userState.isLoggedIn) {
      axios
        .post(`/trips/${selectTrip}/ideas`, null, { params: { activity_id } })
        .then((res) => {
          const newIdea = ideasHelper([res.data]);
          const newIdeasList = [...tripData.ideasList, ...newIdea];

          setTripData({ ...tripData, ideasList: newIdeasList });
        })
        .catch((err) => console.log(err));
    }
  };

  const removeIdea = (e, idea_id) => {
    e.stopPropagation();
    axios
      .delete(`/trips/${selectTrip}/ideas/${idea_id}`)
      .then((res) => {
        const updateIdeas = tripData.ideasList.filter((idea) => {
          return idea.id !== res.data.id;
        });

        setTripData({ ...tripData, ideasList: updateIdeas });
      })
      .catch((err) => console.log(err));
  };

  const addEntryToTrip = (e, activity_id) => {
    e.stopPropagation();

    if (userState.isLoggedIn) {
      const newOrder =
        tripData.itinerary.days[activeDay.dayOrder].entries.length;

      const entryObj = {
        activity_id,
        order: newOrder
      };
      if (activity_id && selectTrip && activeDay) {
        axios
          .post(`/trips/${selectTrip}/days/${activeDay.day_id}/entries`, null, {
            params: entryObj
          })
          .then((res) => {
            const activities = matchActivity(res.data.activity_id);
            const newEntryObj = [{ ...res.data, activities }];

            const EntriesArr = [
              ...tripData.itinerary.days[activeDay.dayOrder].entries,
              ...newEntryObj
            ];

            const itinerary = { ...tripData.itinerary };
            itinerary.days[activeDay.dayOrder].entries = EntriesArr;
            setTripData({ ...tripData, itinerary });
          });
      }
    }
  };

  const removeEntry = (entry_id) => {
    axios
      .delete(
        `/trips/${selectTrip}/days/${activeDay.day_id}/entries/${entry_id}`
      )
      .then((res) => {
        const updateEntries = tripData.itinerary.days[
          activeDay.dayOrder
        ].entries.filter((entry) => {
          return entry.id !== entry_id;
        });

        const updateDaysArr = [...tripData.itinerary.days];
        updateDaysArr[activeDay.dayOrder].entries = updateEntries;

        const updateItinerary = { ...tripData.itinerary };
        updateItinerary.days = updateDaysArr;

        setTripData({ ...tripData, itinerary: updateItinerary });
      })
      .catch((err) => console.log(err));
  };

  const addVotes = (e, idea_id, current_votes, index) => {
    e.stopPropagation();

    const user_id = userState.user.id;
    if (!current_votes.includes(user_id)) {
      axios
        .post(`/trips/${selectTrip}/ideas/${idea_id}/votes`, null, {
          params: { user_id }
        })
        .then((res) => {
          const newVotes = [...current_votes, res.data];
          const newIdeaList = [...tripData.ideasList];
          newIdeaList[index].votes = newVotes;
          setTripData({ ...tripData, ideasList: newIdeaList });
        })
        .catch((err) => console.log(err));
    }
  };

  const removeVotes = (e, idea_id, current_votes, idea_index) => {
    e.stopPropagation();
    const user_id = userState.user.id;
    const voteIndex = current_votes.findIndex((vote) => {
      return vote.user_id === user_id;
    });
    const id = current_votes[voteIndex].id;
    axios
      .delete(`/trips/${selectTrip}/ideas/${idea_id}/votes/${id}`)
      .then((res) => {
        const newVotes = current_votes.filter((ele) => {
          return ele.id !== res.data.id;
        });

        const newIdeaList = [...tripData.ideasList];
        newIdeaList[idea_index].votes = newVotes;
        setTripData({ ...tripData, ideasList: newIdeaList });
      })
      .catch((err) => console.log(err));
  };

  const onDragEndHandler = (result) => {
    // persist reordering
    const { destination, source, draggableId } = result;
    console.log(result);
    console.log(`source is ${source.index}`);
    console.log(`finish pos is ${destination.index}`);

    if (!destination) {
      //convert ID to number
      console.log(`Remove Entry ${draggableId}`);
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const entryList = [...tripData.itinerary.days[activeDay.dayOrder].entries];
    const [selectedEntry] = entryList.splice(source.index, 1);
    entryList.splice(destination.index, 0, selectedEntry);

    for (let i = 0; i < entryList.length; i++) {
      entryList[i].order = i;
    }

    const itinerary = { ...tripData.itinerary };
    itinerary.days[activeDay.dayOrder].entries = entryList;

    const reorderRequests = entryList.map((entry) =>
      axios
        .put(
          `/trips/${selectTrip}/days/${activeDay.day_id}/entries/${entry.id},`,
          null,
          { params: { order: entry.order } }
        )
        .catch((err) => console.log(err))
    );

    Promise.all([reorderRequests])
      .then((res) => {
        setTripData({ ...tripData, itinerary });
      })

      .catch((errors) => console.log(errors));
  };

  const exploreListToggleClickHandler = () => {
    setExploreOpen(!exploreOpen);
  };

  const tripToggleClickHandler = () => {
    setTripOpen(!tripOpen);
  };

  let exploreDrawer;
  let tripDrawer;

  if (exploreOpen) {
    exploreDrawer = (
      <ExploreList
        activityData={exploreList}
        suggestActivity={suggestActivity}
        addEntryToTrip={addEntryToTrip}
      />
    );
  }

  if (tripOpen) {
    tripDrawer = (
      <TripDetails
        tripList={tripList}
        userState={userState}
        selectTrip={selectTrip}
        tripData={tripData.itinerary}
        tripSelectHandler={tripSelectHandler}
        selectDay={selectDay}
        activeDay={activeDay}
        removeEntry={removeEntry}
        onDragEndHandler={onDragEndHandler}
      />
    );
  }

  // Initial data/state
  useEffect(() => {
    loginStatus();
    axios.get(`/activities`).then((res) => {
      setExploreList(res.data);
    });
  }, []);

  //get list of trips for user when they login
  useEffect(() => {
    axios
      .get(`/trips`, { params: { user_id: userState.user.id } })
      .then((res) => {
        setTripList(res.data);
      });
  }, [userState]);

  //update tripData state and select first day when selecting trip
  useEffect(() => {
    if (selectTrip !== null) {
      Promise.all([
        axios.get(`/trips/${selectTrip}`),
        axios.get(`/trips/${selectTrip}/ideas`)
      ]).then(([itinerary, ideasList]) => {
        setTripData({
          itinerary: itinerary.data,
          ideasList: ideasHelper(ideasList.data)
        });

        setActiveDay({ day_id: itinerary.data.days[0].id, dayOrder: 0 });
      });
    }
  }, [selectTrip]);

  return (
    <main className='app'>
      <Router>
        <Navigation userState={userState} handleLogout={handleLogout} />
        <ExploreListToggle click={exploreListToggleClickHandler} />
        {exploreDrawer}
        <TripDetailsToggle click={tripToggleClickHandler} />
        {tripDrawer}

        <Switch>
          <section className='backdrop'>
            <Route path='/' exact component={Homepage}></Route>
            <Route path='/Mapview' exact component={Mapview}></Route>
            <Route
              path='/Login'
              exact
              render={() => (
                <Login
                  loginForm={loginForm}
                  handleFormChange={loginFormChangeHandler}
                  submitLoginForm={submitLoginForm}
                />
              )}
            ></Route>
            <Route
              path='/Signup'
              exact
              render={() => (
                <Signup
                  signupForm={signupForm}
                  signupFormChangeHandler={signupFormChangeHandler}
                  submitSignupForm={submitSignupForm}
                />
              )}
            ></Route>

            <Route
              path='/TripList'
              render={() => (
                <TripList
                  tripList={tripList}
                  userState={userState}
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
                  userState={userState}
                  addCustomIdea={addCustomIdea}
                  trip_id={selectTrip}
                  addVotes={addVotes}
                  removeVotes={removeVotes}
                  user_id={userState.user.id}
                  addEntryToTrip={addEntryToTrip}
                  removeIdea={removeIdea}
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
