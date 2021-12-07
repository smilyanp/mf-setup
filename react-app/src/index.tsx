import React from 'react';
import { setEnvironment } from './environments';
import Main from './Main';

export default class Root extends React.Component {
  render() {
    if (this.props['environment']) {
      setEnvironment(this.props['environment']);
    }

    return <Main/>;
  }
}