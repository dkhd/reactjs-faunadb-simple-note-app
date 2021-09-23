import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import NewNote from './pages/New';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='min-w-screen min-h-screen'>
      <Router>
        <div className='flex flex-row justify-center container mx-auto'>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/new' exact>
              <NewNote />
            </Route>
            <Route path='/:id' exact>
              <NewNote />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
