import React from 'react';
import './Header.css';

function Header(props) {
  const hue = props.hue;
  const sat = `${props.saturation}%`;
  const lts = `${props.lightness}%`;
  return (
    <header className="site-header">
      <h2>iridescent</h2>
      <button className="btn btn-hsl">{`hsl(${hue}, ${sat}, ${lts})`}</button>
      <p>Find your color.</p>
    </header>
  )
}

export default Header;