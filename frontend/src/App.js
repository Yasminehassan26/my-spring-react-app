import  './CssFiles/App.css';
import {BrowserRouter as Router , Switch ,Route,Link } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ListPage from './Hooks/ListPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/ShowList" component={ListPage}/>

      </Switch>
    </div>
    </Router>
  );
}
export default App;