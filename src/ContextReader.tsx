import React, {Component} from 'react';
import { AppContextConsumer } from './AppState';

export default class ContextReader extends Component {

  render() {
    return (
      <AppContextConsumer>
        {({ user }) => <h1>Welcome Mr. {user.firstname}, <i>{user.lastname}</i> in 'Context API' Sample!</h1>}
      </AppContextConsumer>
    );
  }
}