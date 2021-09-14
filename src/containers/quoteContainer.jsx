import React, { Component } from 'react';

export default class quoteContainer extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.setState({});
  }
  render() {
    const { loading } = this.state;

    if (loading) return <h1>Loading</h1>;

    return <div>Quotey Quotes</div>;
  }
}
