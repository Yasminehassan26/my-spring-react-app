import  './CssFiles/App.css';
import {BrowserRouter as Router , Switch ,Route,Link } from 'react-router-dom';
import ListPage from './Components/ListPage';
import HomePage from './Components/HomePage';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/showlist" component={ListPage}/>

      </Switch>
    </div>
    </Router>
  );
}

export default App;