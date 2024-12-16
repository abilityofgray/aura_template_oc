import _ from 'lodash';

import './stylesheet.css'


/*
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./image', false, /\.(png|jpe?g|svg)$/));
*/
function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());