/**
 * Created by rashad on 12/9/16.
 */
import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h1 className="page-header"> Below is available list of products </h1>
          <Link to="items" className="btn btn-xs btn-success"> All Items </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
