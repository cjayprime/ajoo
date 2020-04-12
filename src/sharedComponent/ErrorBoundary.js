import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
  
    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ ...this.state, hasError: true, error });
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }
  
    render() {
        const { hasError, error } = this.state;
        if (hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong: {error.message}</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;