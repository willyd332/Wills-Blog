import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './styles/index.module.css';

import Layout from '../components/layout';

export default function Home(props) {
  return (
  <Layout>
    <div className={styles.headerBox} >
      <h1 className={styles.header} >
          {props.data.site.siteMetadata.title}
      </h1>
    </div>
  </Layout>
  );
}

export const data = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

Home.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }),
};
