import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Overview from './overview/Overview';

function App() {
  return (
    <div className="App">
      <Home/>
      <div className="main">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Overview/>
          </Route>
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
