import React, {Component} from 'react';

class ScrollToTopOnMount extends Component {
  componentDidMount(prevProps) {
    window.scrollY = 0;
    console.log('ok');
  }

  render() {
    return null
  }
}

export default ScrollToTopOnMount;