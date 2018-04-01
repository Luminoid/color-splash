import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { hex2rgb, isLight } from './util/Color';

export class ColorBlock extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isHover: false };
  }

  handleHover = () => {
    this.setState(prevState => ({
      isHover: !prevState.isHover
    }));
  };

  handleClick = (colorId, colorVal) => {
    const aux = document.createElement('input');
    aux.style.position = 'absolute';
    aux.style.left = '-9999px';
    aux.style.top = '0';
    aux.setAttribute('value', document.getElementById(colorId).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);

    this.props.toggleDisplayView(this.props.color, colorVal);
  };

  fontColor = () => (isLight(this.props.color) ? 'black' : 'white');

  render() {
    let colorVal;
    if (this.props.isRgb) {
      const [red, green, blue] = hex2rgb(this.props.color);
      colorVal = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    } else {
      colorVal = this.props.color;
    }

    const colorId = this.props.pane + 'ColorBlock-value-' + this.props.id;

    return this.props.pane !== 'MD' ? (
      <div
        className={this.props.pane + '-ColorBlock'}
        style={{ backgroundColor: this.props.color }}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        onClick={e => this.handleClick(colorId, colorVal, e)}
      >
        <p className="ColorBlock-name">{this.props.name}</p>
        <p className="ColorBlock-value" id={colorId}>
          {colorVal}
        </p>
      </div>
    ) : (
      <div
        className="MD-ColorBlock"
        style={{ backgroundColor: this.props.color }}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        onClick={e => this.handleClick(colorId, colorVal, e)}
      >
        <p
          className="ColorBlock-name"
          hidden={!this.state.isHover}
          style={{ color: this.fontColor() }}
        >
          {this.props.name}
        </p>
        <p
          className="ColorBlock-value"
          id={colorId}
          hidden={!this.state.isHover}
          style={{ color: this.fontColor() }}
        >
          {colorVal}
        </p>
      </div>
    );
  }
}

ColorBlock.propTypes = {
  id: PropTypes.string,
  pane: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  isRgb: PropTypes.bool,
  toggleDisplayView: PropTypes.func
};
