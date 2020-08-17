import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainLogin from './pages/MainLogin';
import MainPlaylist from './pages/MainPlaylist';
import LoginError from './components/login/LoginError';

ReactDOM.render(
  <React.StrictMode>
    <MainPlaylist />
  </React.StrictMode>,
  document.getElementById('root')
);
