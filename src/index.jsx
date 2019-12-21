import React from 'react';
import ReactDOM from 'react-dom';
import Giflist from './components/giflist.jsx'

import '../assets/stylesheets/application.scss';

<Giflist name="World" />

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<SearchBar name="World" />, root);
}
