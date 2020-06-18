import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './styles/layout.module.css';

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
    className={styles.layoutBox}
    >
        <div
        className={styles.navBox}
        >
            <Link
              to="/"
              className={styles.title}
             >
                {data.site.siteMetadata.title}
            </Link>
            <Link
              className={styles.navLink}
              to="/"
            >
                Home
            </Link>
            <Link
              className={styles.navLink}
              to="/posts/"
            >
                Blog Posts
            </Link>
        </div>
        {props.children}
   </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};
