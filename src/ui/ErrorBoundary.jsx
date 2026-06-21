import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="card" style={{ border: '1px solid var(--danger, red)', padding: '2rem', margin: '1rem', color: 'var(--text-primary)' }}>
          <h2 style={{ color: 'var(--danger, red)' }}>An unexpected error occurred.</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
          <button className="btn btn-outline" onClick={() => window.location.reload()}>Reload Application</button>
        </div>
      );
    }
    return this.props.children;
  }
}
