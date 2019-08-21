import React from 'react';
import Clipboard from 'clipboard';
import './Header.css';

class Header extends React.Component {
  componentDidMount() {
    const cb = new Clipboard('.btn');
    const success = document.querySelector('.success');
    cb.on('success', (e) => {
      success.classList.add('open');

      setTimeout(() => {
        success.classList.remove('open');
      }, 2000)

      e.clearSelection();
    });
  }

  render() {
    return (
      <header className="site-header">
        <h2>iridescent</h2>
        <button className="btn btn-hsl" data-clipboard-text={this.props.hslVal}>{this.props.hslVal}</button>
        <button className="btn btn-rgb" data-clipboard-text={this.props.rgbVal}>{this.props.rgbVal}</button>
        <button className="btn btn-hex" data-clipboard-text={this.props.hexVal}>{this.props.hexVal}</button>
        <p>Find your color.</p>
        <div className="success">
          <span>Copied!</span>
        </div>
      </header>
    )
  }
}

export default Header;
