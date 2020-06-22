import React from 'react';
import PropTypes from 'prop-types';
import layoutStyles from './styles/layout.module.css';
import './styles/globalStyles.css';

// Components
import TitleTile from './Title-Tile';
import InfoTile from './Info-Tile';

export default function Layout({
  children, mainImgUrl, subtitle, isPost = false,
}) {
  const styles = layoutStyles;
  return (
    <div className={`container-fluid ${styles.mainBox}`}>
      <TitleTile isPost={isPost} subtitle={subtitle} imgUrl={mainImgUrl} />
      <div className='container-fluid'>
        <div className='row'>
          <div className={`col-xl-10 col-lg-9 ${styles.contentBox}`}>
            {children}
          </div>
          <div className={`col-lg-3 col-xl-2 d-none d-lg-block d-xl-block ${styles.infoBox}`}>
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
  subtitle: PropTypes.string.isRequired,
  isPost: PropTypes.bool,
};

Layout.defaultProps = {
  isPost: false,
};
