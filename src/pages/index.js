import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import '../components/styles/bootstrap.css';

import Layout from '../components/layout';
import BlogPreview from '../components/Blog-Preview';

export default function Home(props) {
  const nodes = props.data.allMarkdownRemark.edges;
  return (
  <Layout mainImgUrl={ props.data.site.siteMetadata.defaultImgUrl } mainImgAlt="Main Image" >
    <div className='container-fluid'>
      {nodes.map(({ node }) => (
        <BlogPreview key={node.id} postInfo={node} />
      ))}
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
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          author
          tags
          imageAlt
          imageUrl
        }
        fields {
          slug
        }
        excerpt(pruneLength: 400)
      }
    }
  }
}
`;

Home.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        defaultImgUrl: PropTypes.string,
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
            author: PropTypes.string,
            tags: PropTypes.array,
            imageAlt: PropTypes.string,
            imageUrl: PropTypes.string,
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
