import React, { Component } from 'react';
import { CounterContext } from './CounterContext';

class CComponent extends Component {
  render() {
    return (
      <div>
           Class Component
           <h2>{this.props.counter}</h2>
           <CounterContext.Consumer>
               {(value) => {
                   return <h2>{value}</h2>
               }}
           </CounterContext.Consumer>
            </div>
    );
  }
}

export default CComponent;
