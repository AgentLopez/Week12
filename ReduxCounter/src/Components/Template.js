import { Component } from "react";
import Header from "./Header";


class Template extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
      
            </div>
    
        )
    }
}

export default Template