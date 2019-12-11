import React, { useState } from 'react';
import { Route, Link, NavLink } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <Route path="/" render={routeProps => {
        return <SavedList {...routeProps} list={savedList} />
      }}>
      </Route>
      <Route exact path="/" render={routeProps => {
        return <MovieList {...routeProps} />
      }} />
      <Route
        path="/movies/:id"
        render={routeProps => {
          return <Movie {...routeProps} movies={savedList} />;
        }}
      />
    </div>
  );
};

export default App;
