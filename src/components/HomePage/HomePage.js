import React from 'react';
import {Link} from "react-router-dom";

const HomePage = props => {
  return (
    <div className="vertical-center justify-content-center flex-column">
      <h2>Home page</h2>
      <Link to={'/auth'}>
        <h2>Auth page</h2>
      </Link>
    </div>
  );
};

export default HomePage;