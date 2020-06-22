/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import '../components/styles/bootstrap.css';
import Layout from '../components/layout';
import postStyles from '../components/styles/posts.module.css';
import BlogFooter from '../components/Blog-Footer';
import frontmatter from '../components/prop-types/frontmatter';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  const styles = postStyles;
  return (
    <Layout
      subtitle={post.frontmatter.title}
      mainImgUrl={post.frontmatter.imageUrl}
      mainImgAlt={post.frontmatter.imageAlt}
    >
      <div className={`container-fluid ${styles.postBox}`}>
        <div className={`row ${styles.titleBox}`}>
          <div className={`col-12 ${styles.title}`}>
            {post.frontmatter.title}
          </div>
        </div>
        <div className={`row ${styles.textBox}`}>
          <div className={`col-12 ${styles.text}`} dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
      <BlogFooter id={post.id} post={post} />
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
        author
        date
        imageAlt
        imageUrl
        tags
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
      frontmatter,
    }),
  }).isRequired,
};
