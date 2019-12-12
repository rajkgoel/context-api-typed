import React from 'react';
import { AppContextConsumer } from './AppState';

export default function ContextEditor() {
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
        </div>
      )}
    </AppContextConsumer>
  );
}