import React, { Component } from 'react';
import './App.css';
import MenuIcon from './res/Menu.png';
import AppleLogo from './res/Apple_Logo.png';
import MDLogo from './res/Material_Design_Logo.png';
import PantoneLogo from './res/Pantone_Logo.png';
import { AppleColorPane } from './AppleColorPane';
import { MDColorPane } from './MDColorPane';
import { PantoneColorPane } from './PantoneColorPane';

function NavigationItem(props) {
  return (
    <div className="Navigator-item">
      <img
        src={props.img_src}
        alt={props.img_alt}
        onClick={e => {
          props.changePane(props.paneId, e);
        }}
      />
      <a href={props.a_href} target="_blank" rel="noopener noreferrer">
        {props.name}
      </a>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPane: 1, isExpanded: false };
  }

  changePane = paneId => {
    this.setState({ currentPane: paneId });
  };

  toggleExpanded = () => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  };

  render() {
    let ColorPane;
    let navClassName =
      'Navigator ' +
      (this.state.isExpanded ? 'Navigator-expanded' : 'Navigator-collapsed');
    switch (this.state.currentPane) {
      case 1: {
        ColorPane = <AppleColorPane />;
        break;
      }
      case 2: {
        ColorPane = <MDColorPane />;
        break;
      }
      case 3: {
        ColorPane = <PantoneColorPane />;
        break;
      }
      default: {
        ColorPane = <AppleColorPane />;
      }
    }

    return (
      <div className="App" style={{ height: window.innerHeight }}>
        <div className={navClassName}>
          <div className="Navigator-menu">
            <img src={MenuIcon} alt="Menu" onClick={this.toggleExpanded} />
          </div>
          <NavigationItem
            img_src={AppleLogo}
            img_alt="Apple logo"
            changePane={this.changePane}
            paneId={1}
            a_href="https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/"
            name="Apple Human Interface Guidelines"
          />
          <NavigationItem
            img_src={MDLogo}
            img_alt="Material Design logo"
            changePane={this.changePane}
            paneId={2}
            a_href="https://material.io/guidelines/style/color.html"
            name="Google Material Design"
          />
          <NavigationItem
            img_src={PantoneLogo}
            img_alt="Pantone logo"
            changePane={this.changePane}
            paneId={3}
            a_href="https://www.pantone.com"
            name="Pantone Color of the Year"
          />
        </div>
        <div className="ColorPane">{ColorPane}</div>
      </div>
    );
  }
}

export default App;
