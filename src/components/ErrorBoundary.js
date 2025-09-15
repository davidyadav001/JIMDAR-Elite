import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-jimdar-dark flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-jimdar-darker rounded-xl p-8 border border-red-500/20">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="h-8 w-8 text-red-400" />
              </div>
              
              <h1 className="text-2xl font-serif font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-jimdar-light mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-jimdar-blue text-white font-semibold rounded-lg hover:bg-jimdar-light hover:text-jimdar-darker transition-all duration-300 transform hover:scale-105"
                >
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Try Again
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-jimdar-light text-jimdar-light font-semibold rounded-lg hover:bg-jimdar-light hover:text-jimdar-darker transition-all duration-300"
                >
                  <Home className="mr-2 h-5 w-5" />
                  Go Home
                </button>
              </div>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="text-sm text-jimdar-light cursor-pointer hover:text-white">
                    Error Details (Development)
                  </summary>
                  <pre className="mt-2 text-xs text-red-400 bg-black/50 p-3 rounded overflow-auto">
                    {this.state.error.toString()}
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
