import React from 'react';
import PropTypes from 'prop-types';
import './styles/layout.css';
import TitleTile from './Title-Tile';
import InfoTile from './Info-Tile';

export default function Layout({ children, mainImgUrl }) {
  return (
    <div className='container-fluid'>
      <TitleTile imgUrl={mainImgUrl} />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-10 col-lg-9' style={{ border: '1px solid black' }}>
            {children}
          </div>
          <div className='col-lg-3 col-xl-2 d-none d-lg-block d-xl-block' style={{ border: '1px solid black' }}>
            <InfoTile />
          </div>
        </div>

      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  mainImgUrl: PropTypes.string.isRequired,
};
