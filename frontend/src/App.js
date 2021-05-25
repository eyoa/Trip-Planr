import './App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { ExploreListToggle } from './components/ExploreList/ExploreListToggle';
import { ExploreList } from './components/ExploreList/ExploreList';
import { Homepage } from './components/Homepage';
import { Mapview } from './components/Mapview';

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
    img_url: '/img/activityImg.jpg',
    rating: 4,
    category: 'Test',
    url: 'http://example.org'
  },
  {
    name: 'ROM',
    description:
      "Stories description text to build on the card title and make up the bulk of the card's content.",
    img_url: '/img/activityImg.jpg',
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
    img_url: '/img/activityImg.jpg',
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
  }
];

function App() {
  const [exploreOpen, setExploreOpen] = useState(false);

  const exploreListToggleClickHandler = () => {
    setExploreOpen(!exploreOpen);
  };

  let exploreDrawer;

  if (exploreOpen) {
    exploreDrawer = <ExploreList activityData={exploreList} />;
  }

  return (
    <main className='app'>
      <Router>
        <Navigation />
        <ExploreListToggle click={exploreListToggleClickHandler} />
        {exploreDrawer}
        <Switch>
          <section className='backdrop'>
            <Route path='/' exact component={Homepage}></Route>
            <Route path='/Mapview' exact component={Mapview}></Route>
          </section>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
