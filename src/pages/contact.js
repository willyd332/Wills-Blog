import React from 'react';
import { graphql } from 'gatsby';
import '../components/styles/bootstrap.css';
import PropTypes from 'prop-types';

import Layout from '../components/layout';

export default function Contact({ data }) {
  return (
    <Layout contact mainImgUrl={data.site.siteMetadata.contactImgUrl}>
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
      contactImgUrl
    }
  }
}`;

Contact.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        contactImgUrl: PropTypes.string,
      }),
    }),
  }).isRequired,
};
