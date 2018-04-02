import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import ColorBlock from './ColorBlock';

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

function AppleColorPane(props) {
  const colorBlocks = appleColorLst.map(colorItem => (
    <ColorBlock
      key={(colorItem[0] + colorItem[1]).replace(/\s/g, '')}
      id={(colorItem[0] + colorItem[1]).replace(/\s/g, '')}
      pane="Apple"
      name={colorItem[0]}
      color={colorItem[1]}
      isRgb={props.isRgb}
      toggleDisplayView={props.toggleDisplayView}
    />
  ));

  return <div className="Apple-ColorPane">{colorBlocks}</div>;
}

AppleColorPane.propTypes = {
  isRgb: PropTypes.bool,
  toggleDisplayView: PropTypes.func
};

export default AppleColorPane;
