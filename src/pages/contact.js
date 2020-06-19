import React from 'react';
import { graphql } from 'gatsby';
import '../components/styles/bootstrap.css';
import PropTypes from 'prop-types';

import Layout from '../components/layout';

export default function Contact(props) {
  return (
    <Layout mainImgUrl={ props.data.site.siteMetadata.defaultImgUrl } mainImgAlt="Main Image" >
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            Soon I will Put Some Contact Info Here
          </div>
        </div>
      </div>
  </Layout>
  );
}

export const data = graphql`
{
  site {
    siteMetadata {
      defaultImgUrl
    }
  }
}`;

Contact.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        defaultImgUrl: PropTypes.string,
      }),
    }),
  }),
};
