import _ from 'lodash';
import './index.twig'
import './stylesheet.scss'
import './scripts/currency_dropdown.js'
import './scripts/catalog_dropdown.js'


function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));