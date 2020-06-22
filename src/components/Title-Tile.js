import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import titleStyle from './styles/title.module.css';

export default function TitleTile({ imgUrl, subtitle }) {
  const styles = titleStyle;
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
    `);
  return (
    <div className={`container-fluid ${styles.headerBox}`}>
      <div className={`container-fluid ${styles.titleBox}`} style={{ background: `url(${imgUrl}) center fixed no-repeat `, backgroundSize: 'contain' }}>
        <Link
          to='/'
          className={`row ${styles.title}`}
        >
          <div className='col'>
            {data.site.siteMetadata.title}
          </div>
        </Link>
        <div className={`row ${styles.subtitle}`}>
          <div className='col'>
            { subtitle }
          </div>
        </div>
        <div className='row'>
          <div className={`offset-3 col-6 ${styles.linkBox}`}>
            <Link
              to='/'
              className={`col ${styles.link}`}
            >
              Home
            </Link>
            <Link
              to='/contact/'
              className={`col ${styles.link}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

TitleTile.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
