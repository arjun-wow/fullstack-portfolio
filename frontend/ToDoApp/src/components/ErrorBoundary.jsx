import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props){ super(props); this.state = { hasError:false } }
  static getDerivedStateFromError(){ return { hasError:true } }
  componentDidCatch(err, info){ console.error('ErrorBoundary:', err, info) }
  render(){
    if(this.state.hasError){
      return <div className="p-6 bg-red-50 border-l-4 border-red-400 text-red-700 rounded">An unexpected error occurred. <button className="ml-4 underline" onClick={() => this.setState({hasError:false})}>Retry</button></div>
    }
    return this.props.children
  }
}

export default ErrorBoundary
