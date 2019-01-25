import React from 'react'
import { Link } from 'react-router-dom'

const Feature = () => (
  <div>
    <Link to="/modal-gallery/gallery">Visit the Gallery</Link>
    <h2>Featured Image</h2>
    <ul>
      <li>
        <Link to="/modal-gallery/img/2">Tomato</Link>
      </li>
      <li>
        <Link to="/modal-gallery/img/4">Crimson</Link>
      </li>
    </ul>
  </div>
);

export default Feature