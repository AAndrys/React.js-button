import React from 'react';
//import logo from './logo.svg';
import './App.css';

const buttontexton = "turn on!";
const buttontextoff = "turn off!";
const newcolorbutton = "rgb(165, 47, 47)";
const colorbutton = "rgb(240, 128, 128)";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: buttontexton,
      color: colorbutton
    };
    this.changetext = this.changetext.bind(this);
    this.changecolor = this.changecolor.bind(this);
  }
  changetext() {
    const newtext = this.state.text === buttontexton ? buttontextoff : buttontexton;
    this.setState({ text: newtext });
  }
  changecolor() {
    const newcolor = this.state.color === colorbutton ? newcolorbutton : colorbutton;
    this.setState({ color: newcolor });
  }
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <button 
        style={{background: this.state.color}}
        onClick={() => {
          this.changetext();
          this.changecolor();
        }}>
         { this.state.text }
        </button>
      </header>
    </div>
  )}
}

export default App;
