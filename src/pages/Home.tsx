import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <h1>Hello 😊</h1>
      <Link to="/page">Page</Link>
    </div>
  )
}

export default Home
