import React from 'react';
import AppContext from "./AppContext";

interface P {

}

interface S {
    fullname: string
}

class ContextReaderLifeCycle extends React.Component<P, S>  {

    user: string = "";
    constructor(props: any) {
        super(props);
        this.state = { fullname: ""};
    }
    
    componentDidMount() {
        this.setState({fullname: this.context.username});
    }

    render() {
        //const value = this.context;
        console.log(this.user);

        return (
        <React.Fragment>
            <h3>Inside ContextReaderLifeCycle</h3>
            State thru componentDidMount: {this.state.fullname}
            <br/>
            Context: {this.context.username}
        </React.Fragment>);
    }
}
ContextReaderLifeCycle.contextType = AppContext;
export default ContextReaderLifeCycle;