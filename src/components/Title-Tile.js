import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

export default function TitleTile(props) {
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
    <div className="container-fluid">
        <div className='container'>
            <Link
                to="/"
                className='row'
            >
                <div className="offset-3 col-6" >
                    {data.site.siteMetadata.title}
                </div>
            </Link>
            <div className='row' >
                <div className="offset-3 col-6" >
                    {data.site.siteMetadata.description}
                </div>
            </div>
        </div>
        <div className="container" >
            <div className='row'>
                <div className='offset-3 col-6' >
                    <Link
                        to="/"
                        className='col'
                    >
                        Home
                    </Link>
                    <Link
                        to="/contact/"
                        className='col'
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
  imgUrl: PropTypes.string,
};
