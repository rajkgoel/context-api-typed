import React from 'react';
import { AppContextConsumer } from './AppState';

export default class ContextEditor extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { username: ""};
  }
  
  render() {
    return (
      <AppContextConsumer>
        {({ updateUsername }) => (
          <div>
            <h2>Edit Context</h2>
            <label htmlFor="username">Username: </label>
            <input id="username" type="text"
              onChange={event => {
                updateUsername(event.target.value);
              }}
            />
            <button>Update</button>
          </div>
        )}
      </AppContextConsumer>
    );
  }
}