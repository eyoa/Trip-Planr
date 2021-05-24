import './App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Homepage } from './components/Homepage';
import { Mapview } from './components/Mapview';

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

function App() {
  return (
    <main>
      <Router>
        <Navigation />
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
