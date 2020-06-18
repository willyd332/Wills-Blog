import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import './bootstrap-4.5.0-dist/css/bootstrap.css';
import './styles/layout.css';

export default function Layout(props) {
  const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
        `);
  return (
    <div
    className='layoutBox container-fluid'
    >
        <div
        className='navBox row'
        >
            <Link
              to="/"
              className='title col-lg-6 col-4 offset-1'
             >
                {data.site.siteMetadata.title}
            </Link>
            <Link
              className='navLink col-lg-2 col-3'
              to="/"
            >
                Home
            </Link>
            <Link
              className='navLink col-lg-2 col-3 left-offset-1'
              to="/posts/"
            >
                Archive
            </Link>
        </div>
        {props.children}
   </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};
