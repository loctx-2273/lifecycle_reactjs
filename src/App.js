import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Chua update",
      name: "LocTX"
    }
  }

  componentWillMount() {
    console.log("componentWillMount chay")
  }

  componentDidMount() {
    console.log("componentDidMount chay")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate chay")
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate chay")
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate chay")
  }

  updateState = () => {
    this.setState({
      status: "Da update",
      name: "FullName: Tran Xuan Loc"
    });
  }

  render() {
    console.log("Render chay")
    console.log(this.state.status)
    return (
      <div>
        <Profile name={this.state.name}></Profile>
        <button onClick={() => this.updateState()}>CLICK</button>
      </div>
    );
  }
}

export default App;
