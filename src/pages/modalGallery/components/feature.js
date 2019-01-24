import React from 'react'
import { Link } from 'react-router-dom'

const Feature = () => (
  <div>
    <h2>Featured Image</h2>
    <ul>
      <li>
        <Link to="/img/2">Tomato</Link>
      </li>
      <li>
        <Link to="/img/4">Crimson</Link>
      </li>
    </ul>
  </div>
);

export default Feature