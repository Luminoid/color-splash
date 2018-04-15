import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class DisplayColorView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      style: {
        opacity: 0,
        backgroundColor: this.props.color
      }
    };
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.mounted) {
      this.unmountStyle();
    } else {
      this.setState({
        display: true
      });
      setTimeout(this.mountStyle, 10);
    }
  }

  mountStyle = () => {
    this.setState({
      style: {
        opacity: 1,
        backgroundColor: this.props.color,
        transition: 'all 0.5s ease-out'
      }
    });
  };

  unmountStyle = () => {
    this.setState({
      style: {
        opacity: 0,
        backgroundColor: this.props.color,
        transition: 'all 0.5s ease-in'
      }
    });
  };

  transitionEnd = () => {
    if (this.props.mounted) {
      setTimeout(this.props.toggleDisplayView, 10);
    } else {
      this.setState({
        display: false
      });
    }
  };

  render() {
    return (
      this.state.display && (
        <div
          className="DisplayColorView"
          style={this.state.style}
          onTransitionEnd={this.transitionEnd}
        >
          <p>{this.props.text} Copied!</p>
        </div>
      )
    );
  }
}

DisplayColorView.prototypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  toggleDisplayView: PropTypes.func,
  mounted: PropTypes.bool
};

export default DisplayColorView;
