import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainLogin from './components/login/MainLogin';
import MainPlaylist from './components/playlist/MainPlaylist';

ReactDOM.render(
  <React.StrictMode>
    <MainLogin />
  </React.StrictMode>,
  document.getElementById('root')
);
