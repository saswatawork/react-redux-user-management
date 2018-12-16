/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class NotFound extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-sm-auto pt-5 mt-5">
            <div className="error-template">
              <h1>
                  Oops!</h1>
              <h2>
                  404 Not Found</h2>
              <div className="error-details">
                  Sorry, an error has occured, Requested page not found!
              </div>
              <div class="error-actions">
                <a href="/" class="btn btn-default btn-lg pl-0">Take me to home</a>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}
