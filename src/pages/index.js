import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import '../components/styles/bootstrap.css';
import styles from '../components/styles/index.module.css';

import Layout from '../components/layout';

export default function Home(props) {
  const first = props.data.allMarkdownRemark.edges[0].node;
  return (
  <Layout>
    <div>
      <div>
        <div>
            Most Recent Post
        </div>
      </div>
      <div className={'row'} >
      <Link
            to={first.fields.slug}
          >
             <h2>
               {first.frontmatter.title}
             </h2>
             <p>
             {first.frontmatter.date}
             </p>
             <p>
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
