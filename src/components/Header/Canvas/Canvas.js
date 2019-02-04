import React from 'react';
import { isMobile } from 'react-device-detect';
import Box from './Box';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.tick = this.tick.bind(this);
    this.updateCanvasDimensions = this.updateCanvasDimensions.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.screenSize = this.screenSize.bind(this);
    this.ctx = undefined;
    this.boxArray = undefined;
    this.previousScreenSize = undefined;

    this.state = { width: undefined, height: undefined };
  }

  componentDidMount() {
    // const width = window.innerWidth;
    // const height = window.innerHeight;
    const size = this.screenSize();
    this.setState({ width: size.width, height: size.height });
    this.ctx = this.canvas.current.getContext('2d');
    this.boxArray = new Box(this.ctx, {
      width: size.width,
      height: size.height,
    });
    window.requestAnimationFrame(this.tick);

    window.addEventListener('resize', this.updateCanvasDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateCanvasDimensions);
    window.cancelAnimationFrame(this.tick);
  }

  // returns correct screen size for mobile and desktop
  screenSize() {
    if (isMobile) {
      return { width: window.screen.width, height: window.screen.height };
    }
    return { width: window.innerWidth, height: window.innerHeight };
  }

  handleHover(event) {
    if (
      event.type === 'pointerleave' ||
      event.type === 'touchcancel' ||
      event.type === 'touchend'
    ) {
      this.boxArray.forEach(box => {
        box.hover(undefined, undefined);
      });
    } else {
      this.boxArray.forEach(box => {
        box.hover(event.pageX, event.pageY);
      });
    }
  }

  tick() {
    this.ctx.clearRect(0, 0, this.state.width, this.state.height);
    this.boxArray.forEach(box => {
      box.update();
    });
    window.requestAnimationFrame(this.tick);
  }

  updateCanvasDimensions() {
    this.previousScreenSize = this.state;
    const size = this.screenSize();
    this.setState({ width: size.width, height: size.height });
    this.boxArray.forEach(box => {
      box.resize(this.previousScreenSize, this.state);
    });
  }

  render() {
    return (
      <canvas
        ref={this.canvas}
        width={`${this.state.width}px`}
        height={`${this.state.height}px`}
        onPointerMove={event => this.handleHover(event)}
        onPointerDown={event => this.handleHover(event)}
        onPointerLeave={event => this.handleHover(event)}
        onMouseMove={event => this.handleHover(event)}
        onTouchStart={event => this.handleHover(event)}
        onTouchEnd={event => this.handleHover(event)}
        onTouchCancel={event => this.handleHover(event)}
      />
    );
  }
}

export default Canvas;
