// import React, { Component } from 'react';

// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error('Error caught by error boundary:', error, errorInfo);
//     this.setState({ hasError: true });
//   }

//   render() {
//     if (this.state.hasError) {
//       return <div>Something went wrong. Please try again later.</div>;
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;




import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Log the error to an error tracking service (e.g., Sentry).
    console.error(error);

    // You can also set a state to indicate that an error occurred.
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render a custom error message here.
      return <div>Something went wrong. Please try again later.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;