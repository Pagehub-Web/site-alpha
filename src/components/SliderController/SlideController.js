import React, { Component } from "react";
import ReactDOM from "react-dom";

import ImageCarousel from "./ImageCarousel";

import { mod } from "../../utils/math-helpers";

import "./SlideController.scss";

class SlideController extends Component {
  constructor() {
    super();
    this.state = {
      title: "a",
      activeIndex: 0,
      timerDelay: 5000
    };

    this.images = [
      "https://images.unsplash.com/photo-1560306247-e251d8429306?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80",
      "https://images.unsplash.com/photo-1560305527-51dc8ad5a8f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1425&q=80",
      "https://images.unsplash.com/photo-1560306796-3238e049ff45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    ];
  }

  componentDidMount() {
    this.slideInterval = setInterval(() => {
      this.setState({
        activeIndex: mod(this.state.activeIndex + 1, this.images.length)
      });
    }, this.state.timerDelay);
  }

  moveBy = spaces => {
    this.setState({
      activeIndex: mod(
        this.state.activeIndex + spaces,
        this.state.images.length
      )
    });
  };

  render() {
    return (
      <div className="slide-controller-container">
        <ImageCarousel
          images={this.images}
          color="#00ff9d"
          isControlled={true}
          activeImageInd={this.state.activeIndex}
          controls={true}
          timerDelay={this.state.timerDelay}
          handleInput={this.moveBy}
        />
      </div>
    );
  }
}

export default SlideController;
