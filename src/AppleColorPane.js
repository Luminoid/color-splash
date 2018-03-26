import React, { Component } from 'react';
import './App.css';

const appleColorLst = [
  ['Red', '#FF3B30'],
  ['Orange', '#FF9500'],
  ['Yellow', '#FFCC00'],
  ['Green', '#4CD964'],
  ['Teal Blue', '#5AC8FA'],
  ['Blue', '#007AFF'],
  ['Purple', '#5856D6'],
  ['Pink', '#FF2D55']
];

class ColorBlock extends Component {
  constructor(props) {
    super(props);
    this.state = { isHover: false };
  }

  handleHover = () => {
    this.setState(prevState => ({
      isHover: !prevState.isHover
    }));
  };

  render() {
    return (
      <div
        className="Apple-ColorBlock"
        style={{ backgroundColor: this.props.color }}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <p className="ColorBlock-name">{this.props.name}</p>
        <p className="ColorBlock-value">{this.props.color}</p>
      </div>
    );
  }
}

export function AppleColorPane() {
  const colorBlocks = appleColorLst.map(colorItem => (
    <ColorBlock name={colorItem[0]} color={colorItem[1]} />
  ));

  return <div className="Apple-ColorPane">{colorBlocks}</div>;
}
