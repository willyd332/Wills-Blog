import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import '../components/styles/bootstrap.css';
import Layout from '../components/layout';
import BlogFooter from '../components/Blog-Footer';

export default function BlogPost(props) {
  const post = props.data.markdownRemark;
  return (
    <Layout>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            {post.frontmatter.title} ****THIS TITLE HAS NOT YET BEEN STYLED****
          </div>
        </div>
        <div className='row'>
          <div className='col-12' dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
      <BlogFooter id={post.id} title={post.frontmatter.title} />
    </Layout>
  );
}

export const data = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      id
      frontmatter {
        title
      }
    }
  }
`;

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string,
      }),
      id: PropTypes.string,
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }),
};
