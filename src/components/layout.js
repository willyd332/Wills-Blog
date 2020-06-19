import React, { Children } from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import './styles/layout.css';
import TitleTile from './Title-Tile';

export default function Layout(props) {
  return (
    <div>
      <TitleTile imgUrl='https://cdn.spacetelescope.org/archives/images/wallpaper5/heic1502a.jpg' />
      {props.children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};
