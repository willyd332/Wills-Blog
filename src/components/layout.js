import React, { Children } from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import './styles/layout.css';
import TitleTile from './Title-Tile';
import InfoTile from './Info-Tile';

export default function Layout(props) {
  return (
    <div className='container-fluid'>
      <TitleTile imgUrl='https://cdn.spacetelescope.org/archives/images/wallpaper5/heic1502a.jpg' />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-10 col-lg-9' style={{ border: '1px solid black' }}>
            {props.children}
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
  children: PropTypes.object,
};
