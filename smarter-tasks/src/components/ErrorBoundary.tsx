import React, { Component, ErrorInfo, ReactNode, ReactElement } from "react";

interface ErrorBoundaryProps {
  children: ReactNode; // This indicates that the component accepts children
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error or send it to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render(): ReactElement {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return <>{this.props.children}</>; // Wrapping in <>{}</> to handle fragments
  }
}

export default ErrorBoundary;
