import React, { Component, Fragment } from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    componentWillMount() {
      this.requestInterceptors = axios.interceptors.request.use(request => {
        this.setState({ error: null });
        return request;
      });
      
      this.responseInterceptors = axios.interceptors.response.use(res => res, error=> {
        this.setState({ error: error });
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptors);
      axios.interceptors.request.eject(this.responseInterceptors);
    }

    errorConfirmHandler = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <Fragment>
          <Modal 
            show={this.state.error}
            modalClosed={this.errorConfirmHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  }
};

export default withErrorHandler;