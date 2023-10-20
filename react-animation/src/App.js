import React, { Component } from "react";
import { Transition } from "react-transition-group";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpenModal: false,
      isBlock: false,
    };
  }

  toggleModal() {
    this.setState((prev) => {
      return { isOpenModal: !prev.isOpenModal };
    });
  }

  toggleBlock() {
    this.setState((prev) => {
      return { isBlock: !prev.isBlock };
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={this.toggleBlock.bind(this)}>
          Toggle
        </button>
        <Transition in={this.state.isBlock} timeout={300} mountOnEnter unmountOnExit>
          {(state) => {
            return (
            <div
              style={{
                width: state === 'exiting' ? 0 : 100,
                height: state === 'exiting' ? 0 : 100,
                backgroundColor: "red",
                margin: "0 auto",
                opacity: state === 'exiting' ? 0: 1,
                transition: 'all 0.3s ease-out'
              }}
            ></div>
          )}}
        </Transition>
        <Modal show={this.state.isOpenModal} onClose={this.toggleModal.bind(this)} />
        {this.state.isOpenModal && <Backdrop />}
        <button className="Button" onClick={this.toggleModal.bind(this)}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
