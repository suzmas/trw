import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }


// 'HelloProps' describes the shape of props
// State is never set so we use the 'undefined' type
export class Hello extends React.Component<HelloProps, undefined> {
  render() {
    return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
  }
}

class Square extends React.Component {

  constructor(){
    super()
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({value:'X'})}>
        {this.state.value}
      </button>
    )
  }


}
