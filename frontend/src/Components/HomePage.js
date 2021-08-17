import React from 'react';
import  '../CssFiles/App.css';
import {Link,Redirect} from 'react-router-dom';

function HomePage() {
    return (
        <div className="main">
            <h1>Hi Everyone</h1>
        <button className="button">
        <Link to ='/showList'>
            <li>Show the List</li>
        </Link>
       </button>
       </div>
    );

  }
  
  export default HomePage;