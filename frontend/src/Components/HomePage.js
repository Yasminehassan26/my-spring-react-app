import React from 'react';
import  '../CssFiles/App.css';
import {Link,Redirect,useHistory} from 'react-router-dom';

function HomePage() {
 const history = useHistory();

  const redirect = () => {
    history.push('/ShowList');
  }
      return (
        <div className="main">
            <h1>Hi Everyone</h1>
        <button role ="buttons" className="button" onClick={redirect}>Show the List</button>
       </div>
    );

  }
  export default HomePage;