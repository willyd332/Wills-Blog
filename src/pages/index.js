import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './styles/index.module.css';

import Layout from '../components/layout';

export default function Home(props) {
  const first = props.data.allMarkdownRemark.edges[0].node;
  return (
  <Layout>
    <div className='container' style={{ marginTop: '5vh' }} >
      <div className={`row ${styles.headerBox}`} >
        <div className={`col-lg-5 ${styles.header}`} >
            Most Recent Post
        </div>
      </div>
      <div className={'row'} >
      <Link
            to={first.fields.slug}
            className={`row ${styles.blogLink}`}
          >
             <h2 className='col-8 postTitle'>
               {first.frontmatter.title}
             </h2>
             <p className='col-4 postDate'>
             {first.frontmatter.date}
             </p>
             <p className='col-12'>
             {first.excerpt}
             </p>
          </Link>
      </div>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
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
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number,
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string,
          frontmatter: PropTypes.shape({
            title: PropTypes.string,
            date: PropTypes.string,
          }),
          fields: PropTypes.shape({
            slug: PropTypes.string,
          }),
          excerpt: PropTypes.string,
        }),
      })),
    }),
  }),
};
