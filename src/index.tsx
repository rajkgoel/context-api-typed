import React from 'react';
import ReactDOM from 'react-dom';
import AppState from './AppState';
import * as serviceWorker from './serviceWorker';
import ContextReader from './ContextReader';
import ContextEditor from './ContextEditor';
import ContextReaderLifeCycle from './ContextReaderLifeCycle';

function App() {
    return (
      <AppState>
        <ContextReader />
        <ContextEditor />
        <ContextReaderLifeCycle/>
      </AppState>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
