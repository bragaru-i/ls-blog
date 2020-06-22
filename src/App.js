import React from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import PostArticle from './components/PostArticle/Post';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <PostArticle />
      <Contact />
    </div>
  );
}

export default App;
