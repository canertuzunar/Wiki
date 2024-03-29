import React, { Component, ErrorInfo, ReactNode } from "react";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { ErrorPage } from "src/pages";
import { Layout } from "..";
interface Props  extends RouteComponentProps{
  children: ReactNode;
}


interface State {
  errorMessage?: string;
  hasError: boolean;
  redirect?: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    errorMessage: ' ',
    hasError: false,
    redirect: false,
  };

  handleRedirect() {
    setTimeout(() => {
      this.setState({redirect: true})
    }, 6000);
  }

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({errorMessage: error.message})
  }

  public componentDidMount() {
    //this.handleRedirect()
  }

  public render() {
    if (this.state.hasError) {
      if(this.state.redirect) {
        return <Redirect to="/" />
      }
      return(
        <Layout>
          <ErrorPage />
        </Layout>
      )

    }

    return this.props.children;
  }
}




export default withRouter(ErrorBoundary);
  