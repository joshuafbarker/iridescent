import React from 'react';
import Clipboard from 'clipboard';
import { HSLToRGB, HSLToHex } from '../../utils/conversion';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hue: this.props.hue,
      sat: `${this.props.saturation}%`,
      lts: `${this.props.lightness}%`,
      hslVal: `hsl(${this.props.hue}, ${this.props.saturation}%, ${this.props.lightness}%)`,
      rgbVal: HSLToRGB(this.props.hue, this.props.saturation, this.props.lightness),
      hexVal: HSLToHex(this.props.hue, this.props.saturation, this.props.lightness)
    }
  }

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
        <button className="btn btn-hsl" data-clipboard-text={this.state.hslVal}>{this.state.hslVal}</button>
        <button className="btn btn-rgb" data-clipboard-text={this.state.rgbVal}>{this.state.rgbVal}</button>
        <button className="btn btn-hex" data-clipboard-text={this.state.hexVal}>{this.state.hexVal}</button>
        <p>Find your color.</p>
        <div className="success">
          <span>Copied!</span>
        </div>
      </header>
    )
  }
}

export default Header;
