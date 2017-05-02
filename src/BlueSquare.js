import React from 'react';

function BlueSquare (props) {
  const style = {
    height: '50px',
    width: '50px',
    backgroundColor: 'Blue'
  }
  return <div style={style} className="blue square"></div>
}

export default BlueSquare;
