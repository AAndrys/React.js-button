import React from 'react';
//import logo from './logo.svg';
import './App.css';

const buttontexton = "turn on!";
const buttontextoff = "turn off!";
const newcolorbutton = "rgb(165, 47, 47)";
const colorbutton = "rgb(240, 128, 128)";
const color = 'green';
const color1 = 'red';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: buttontexton,
      color: colorbutton,
      textp: "Waiting...",
      colorp: color,
      size: 40,
      animation: "show 2s linear infinite"
    };
    this.changetext = this.changetext.bind(this);
    this.changecolor = this.changecolor.bind(this);
    this.changesizedown = this.changesizedown.bind(this);
  }
  changetext() {
    const newtext = this.state.text === buttontexton ? buttontextoff : buttontexton;
    const newtextp = this.state.textp === "Waiting..." ? "Running!" : "Waiting...";
    const newanim = this.state.animation === "show 2s linear infinite" ? " " : "show 2s linear infinite";
    this.setState({ 
      text: newtext,
      textp: newtextp,
      animation: newanim
    });
  }
  changecolor() {
    const newcolor = this.state.color === colorbutton ? newcolorbutton : colorbutton;
    const newcolorp = this.state.colorp === color ? color1 : color;
    this.setState({ 
      color: newcolor,
      colorp: newcolorp
    });
  }
  changesizedown() {
  this.setState({ size: this.state.size - 5 })
  //  alert("work");
  }
  changesizeup() {
    this.setState({ size: this.state.size + 5 })
  }
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <button
        className="fontsizedown"
        onClick={() => {
          this.changesizedown();
        }}>
        FONT SIZE DOWN
        </button>
        <button
          className="fontsizeup"
          onClick={() => {
            this.changesizeup();
          }}>
          FONT SIZE UP
        </button>
        <button 
        className="turn"
        style={{background: this.state.color}}
        onClick={() => {
          this.changetext();
          this.changecolor();
        }}>
        { this.state.text }
        </button>
          <p style={{ 
            color: this.state.colorp,
            fontSize: `${this.state.size}px`,
            animation: this.state.animation
            }}>
            { this.state.textp }
          </p>
      </header>
    </div>
  )}
}

export default App;
