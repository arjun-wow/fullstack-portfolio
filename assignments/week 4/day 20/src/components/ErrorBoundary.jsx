import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="dashboard">
          <h3>Something went wrong</h3>
          <p>Try refreshing or contact support.</p>
          <button onClick={() => this.setState({ hasError: false })} className="btn">Try again</button>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
