import React from 'react'
import { withRouter } from "react-router";

// Component to automatically scroll back to top when user change route.
class ScrollToTop extends React.Component {

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);