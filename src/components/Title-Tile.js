import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import titleStyle from './styles/title.module.css';

export default function TitleTile({ imgUrl, subtitle, isPost = false }) {
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
      <div className={`container-fluid ${styles.titleBox}`} style={{ background: `url(${imgUrl}) center fixed no-repeat `, backgroundSize: 'cover' }}>
        <Link
          to='/'
          className={`row ${styles.title}`}
        >
          <div className='col'>
            {isPost ? subtitle : data.site.siteMetadata.title}
          </div>
        </Link>
        <div className={`row ${styles.subtitle}`}>
          <div className='col'>
            {isPost ? data.site.siteMetadata.title : subtitle }
          </div>
        </div>
      </div>
    </div>
  );
}

TitleTile.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  isPost: PropTypes.bool,
};

TitleTile.defaultProps = {
  isPost: false,
};
