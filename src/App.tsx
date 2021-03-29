import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import PokeList from './components/PokeList';
import './App.css';
import PokeDetail from './components/PokeDetail';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={PokeList} />
      <Route path="/:id" component={PokeDetail} />
    </BrowserRouter>
  );
}

export default App;
