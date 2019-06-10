import React from 'react';
import T from 'prop-types';
import { withRouter } from "react-router";

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToTop.propTypes = {
  location: T.object,
  children: T.object,
};

export default withRouter(ScrollToTop);
