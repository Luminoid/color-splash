import React from 'react';
import PropTypes from 'prop-types';
import ColorBlock from './ColorBlock';
import '../style/App.css';

const OpenColorLst = [
  [
    ['Gray 0', '#F8F9FA'],
    ['Gray 1', '#F1F3F5'],
    ['Gray 2', '#E9ECEF'],
    ['Gray 3', '#DEE2E6'],
    ['Gray 4', '#CED4DA'],
    ['Gray 5', '#ADB5BD'],
    ['Gray 6', '#868E96'],
    ['Gray 7', '#495057'],
    ['Gray 8', '#343A40'],
    ['Gray 9', '#212529']
  ],
  [
    ['Red 0', '#FFF5F5'],
    ['Red 1', '#FFE3E3'],
    ['Red 2', '#FFC9C9'],
    ['Red 3', '#FFA8A8'],
    ['Red 4', '#FF8787'],
    ['Red 5', '#FF6B6B'],
    ['Red 6', '#FA5252'],
    ['Red 7', '#F03E3E'],
    ['Red 8', '#E03131'],
    ['Red 9', '#C92A2A']
  ],
  [
    ['Pink 0', '#FFF0F6'],
    ['Pink 1', '#FFDEEB'],
    ['Pink 2', '#FCC2D7'],
    ['Pink 3', '#FAA2C1'],
    ['Pink 4', '#F783AC'],
    ['Pink 5', '#F06595'],
    ['Pink 6', '#E64980'],
    ['Pink 7', '#D6336C'],
    ['Pink 8', '#C2255C'],
    ['Pink 9', '#A61E4D']
  ],
  [
    ['Grape 0', '#F8F0FC'],
    ['Grape 1', '#F3D9FA'],
    ['Grape 2', '#EEBEFA'],
    ['Grape 3', '#E599F7'],
    ['Grape 4', '#DA77F2'],
    ['Grape 5', '#CC5DE8'],
    ['Grape 6', '#BE4BDB'],
    ['Grape 7', '#AE3EC9'],
    ['Grape 8', '#9C36B5'],
    ['Grape 9', '#862E9C']
  ],
  [
    ['Violet 0', '#F3F0FF'],
    ['Violet 1', '#E5DBFF'],
    ['Violet 2', '#D0BFFF'],
    ['Violet 3', '#B197FC'],
    ['Violet 4', '#9775FA'],
    ['Violet 5', '#845EF7'],
    ['Violet 6', '#7950F2'],
    ['Violet 7', '#7048E8'],
    ['Violet 8', '#6741D9'],
    ['Violet 9', '#5F3DC4']
  ],
  [
    ['Indigo 0', '#EDF2FF'],
    ['Indigo 1', '#DBE4FF'],
    ['Indigo 2', '#BAC8FF'],
    ['Indigo 3', '#91A7FF'],
    ['Indigo 4', '#748FFC'],
    ['Indigo 5', '#5C7CFA'],
    ['Indigo 6', '#4C6EF5'],
    ['Indigo 7', '#4263EB'],
    ['Indigo 8', '#3B5BDB'],
    ['Indigo 9', '#364FC7']
  ],
  [
    ['Blue 0', '#E7F5FF'],
    ['Blue 1', '#D0EBFF'],
    ['Blue 2', '#A5D8FF'],
    ['Blue 3', '#74C0FC'],
    ['Blue 4', '#4DABF7'],
    ['Blue 5', '#339AF0'],
    ['Blue 6', '#228BE6'],
    ['Blue 7', '#1C7ED6'],
    ['Blue 8', '#1971C2'],
    ['Blue 9', '#1864AB']
  ],
  [
    ['Cyan 0', '#E3FAFC'],
    ['Cyan 1', '#C5F6FA'],
    ['Cyan 2', '#99E9F2'],
    ['Cyan 3', '#66D9E8'],
    ['Cyan 4', '#3BC9DB'],
    ['Cyan 5', '#22B8CF'],
    ['Cyan 6', '#15AABF'],
    ['Cyan 7', '#1098AD'],
    ['Cyan 8', '#0C8599'],
    ['Cyan 9', '#0B7285']
  ],
  [
    ['Teal 0', '#E6FCF5'],
    ['Teal 1', '#C3FAE8'],
    ['Teal 2', '#96F2D7'],
    ['Teal 3', '#63E6BE'],
    ['Teal 4', '#38D9A9'],
    ['Teal 5', '#20C997'],
    ['Teal 6', '#12B886'],
    ['Teal 7', '#0CA678'],
    ['Teal 8', '#099268'],
    ['Teal 9', '#087F5B']
  ],
  [
    ['Green 0', '#EBFBEE'],
    ['Green 1', '#D3F9D8'],
    ['Green 2', '#B2F2BB'],
    ['Green 3', '#8CE99A'],
    ['Green 4', '#69DB7C'],
    ['Green 5', '#51CF66'],
    ['Green 6', '#40C057'],
    ['Green 7', '#37B24D'],
    ['Green 8', '#2F9E44'],
    ['Green 9', '#2B8A3E']
  ],
  [
    ['Lime 0', '#F4FCE3'],
    ['Lime 1', '#E9FAC8'],
    ['Lime 2', '#D8F5A2'],
    ['Lime 3', '#C0EB75'],
    ['Lime 4', '#A9E34B'],
    ['Lime 5', '#94D82D'],
    ['Lime 6', '#82C91E'],
    ['Lime 7', '#74B816'],
    ['Lime 8', '#66A80F'],
    ['Lime 9', '#5C940D']
  ],
  [
    ['Yellow 0', '#FFF9DB'],
    ['Yellow 1', '#FFF3BF'],
    ['Yellow 2', '#FFEC99'],
    ['Yellow 3', '#FFE066'],
    ['Yellow 4', '#FFD43B'],
    ['Yellow 5', '#FCC419'],
    ['Yellow 6', '#FAB005'],
    ['Yellow 7', '#F59F00'],
    ['Yellow 8', '#F08C00'],
    ['Yellow 9', '#E67700']
  ],
  [
    ['Orange 0', '#fff4e6'],
    ['Orange 1', '#ffe8cc'],
    ['Orange 2', '#ffd8a8'],
    ['Orange 3', '#ffc078'],
    ['Orange 4', '#ffa94d'],
    ['Orange 5', '#ff922b'],
    ['Orange 6', '#fd7e14'],
    ['Orange 7', '#f76707'],
    ['Orange 8', '#e8590c'],
    ['Orange 9', '#d9480f']
  ]
];

function ColorSetBlock(props) {
  return <div className="OpenColor-ColorSetBlock"> {props.children} </div>;
}

function OpenColorPane(props) {
  const colorBlocks = OpenColorLst.map(colorSetItem => (
    <ColorSetBlock key={colorSetItem[0][0]}>
      {colorSetItem.map(colorItem => (
        <ColorBlock
          key={(colorItem[0] + colorItem[1]).replace(/\s/g, '')}
          id={(colorItem[0] + colorItem[1]).replace(/\s/g, '')}
          pane="OpenColor"
          name={colorItem[0]}
          color={colorItem[1]}
          isRgb={props.isRgb}
          toggleDisplayView={props.toggleDisplayView}
        />
      ))}
    </ColorSetBlock>
  ));

  return <div className="OpenColor-ColorPane">{colorBlocks}</div>;
}

OpenColorPane.propTypes = {
  isRgb: PropTypes.bool,
  toggleDisplayView: PropTypes.func
};

export default OpenColorPane;
