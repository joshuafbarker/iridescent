import React from 'react';
import Header from '../components/Header/'

const docStyle = document.documentElement.style;

function randomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.newColor = this.newColor.bind(this);
    this.setDocVars = this.setDocVars.bind(this);

    this.state = {
      hue: randomNumber(360),
      saturation: randomNumber(100),
      lightness: randomNumber(100)
    }
  }

  setDocVars() {
    docStyle.setProperty('--hue', this.state.hue);
    docStyle.setProperty('--saturation', `${this.state.saturation}%`);
    docStyle.setProperty('--lightness', `${this.state.lightness}%`);
    docStyle.setProperty('--lightness-ops', `${this.state.lightness > 50 ? this.state.lightness - 50 : this.state.lightness + 50}%`);
  }

  newColor() {
    this.setState({
      hue: randomNumber(360),
      saturation: randomNumber(100),
      lightness: randomNumber(100)
    });
  }

  componentDidMount() {
    const headerHeight = document.querySelector('.site-header').clientHeight;
    docStyle.setProperty('--header-height', `${headerHeight}px`);

    this.setDocVars();
  }

  componentDidUpdate() {
    this.setDocVars();
  }

  render() {
    return (
      <div>
        <Header hue={this.state.hue} saturation={this.state.saturation} lightness={this.state.lightness} />
        <main>
          <button className="btn btn-opposite" onClick={this.newColor}>New Color</button>
        </main>
      </div>
    )
  }
}

export default App;
