import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './styles/posts.module.css';

import Layout from '../components/layout';

export default function Posts(props) {
  const data = props.data.allMarkdownRemark;

  return (
  <Layout>

    <div className={`container ${styles.articleList}`} >
      {data.edges.map(({ node }) => (
          <Link
            to={node.fields.slug}
            className={`row ${styles.blogLink}`}
            key={node.id}
          >
             <h2 className='col-8 postTitle'>
               {node.frontmatter.title}
             </h2>
             <p className='col-4 postDate'>
             {node.frontmatter.date}
             </p>
             <p lassName='col-12'>
             {node.excerpt}
             </p>
          </Link>
      ))}
    </div>

  </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
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

Posts.propTypes = {
  data: PropTypes.shape({
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
