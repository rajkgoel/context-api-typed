import React from 'react';
import AppContext from "./AppContext";

export default class AppState extends React.Component {
 
  constructor(props: any) {
    super(props);
  }

  updateUsername = (newUsername: string) => {
    this.setState({ username: newUsername, user: {
      firstname: newUsername.split(" ")[0] || "",
      lastname: newUsername.split(" ")[1] || ""
    } });
  };

  state = {
    username: 'User',
    user: { firstname: "ABC", lastname: "XYZ"},
    updateUsername: this.updateUsername,
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppContextConsumer = AppContext.Consumer;