import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import '../components/styles/bootstrap.css';
import frontmatter from '../components/prop-types/frontmatter';

import Layout from '../components/layout';
import BlogPreview from '../components/Blog-Preview';

export default function Home({ data }) {
  const nodes = data.allMarkdownRemark.edges;
  const { site } = data;
  return (
    <Layout mainImgUrl={site.siteMetadata.defaultImgUrl}>
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
          frontmatter,
          fields: PropTypes.shape({
            slug: PropTypes.string,
          }),
          excerpt: PropTypes.string,
        }),
      })),
    }),
  }).isRequired,
};
