import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { ColorBlock } from './ColorBlock';

const pantoneColorLst = [
  ['Ultra Violet', '#5F4B8B'],
  ['Greenery', '#88B04B'],
  ['Serenity', '#93A9D1'],
  ['Rose Quartz', '#F7CACA'],
  ['Marsala', '#964F4C'],
  ['Radiant Orchid', '#AD5E99'],
  ['Emerald', '#009473'],
  ['Tangerine Tango', '#DD4124'],
  ['Honeysuckle', '#D94F70'],
  ['Turquoise', '#45B5AA'],
  ['Mimosa', '#F0C05A'],
  ['Blue Iris', '#5A5B9F'],
  ['Chili Pepper', '#9B1B30'],
  ['Sand Dollar', '#DECDBE'],
  ['Blue Turquoise', '#53B0AE'],
  ['Tigerlily', '#E2583E'],
  ['Aqua Sky', '#7BC4C4'],
  ['True Red', '#BF1932'],
  ['Fuchsia Rose', '#C74375'],
  ['Cerulean', '#98B4D4']
];

export function PantoneColorPane(props) {
  const colorBlocks = pantoneColorLst.map(colorItem => (
    <ColorBlock
      key={(colorItem[0] + colorItem[1]).replace(/\s/g, '')}
      id={(colorItem[0] + colorItem[1]).replace(/\s/g, '')}
      pane="Pantone"
      name={colorItem[0]}
      color={colorItem[1]}
      isRgb={props.isRgb}
      toggleDisplayView={props.toggleDisplayView}
    />
  ));

  return <div className="Pantone-ColorPane">{colorBlocks}</div>;
}

PantoneColorPane.propTypes = {
  isRgb: PropTypes.bool,
  toggleDisplayView: PropTypes.func
};
