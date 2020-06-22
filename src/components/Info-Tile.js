import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import infoStyles from './styles/info-tile.module.css';

export default function InfoTile() {
  const styles = infoStyles;
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              title
            }
          }
        }
      }
    }
`);

  const tags = {};
  data.allMarkdownRemark.edges.forEach(({ node }) => {
    node.frontmatter.tags.forEach((tag) => {
      tags[tag] = tag;
    });
  });

  const recentPosts = data.allMarkdownRemark.edges.slice(0, 10).map(({ node }) => (
    <Link
      to={node.fields.slug}
      key={node.fields.slug}
      className={`col-12 ${styles.recentsLink}`}
    >
      {node.frontmatter.title}
    </Link>
  ));

  // eslint-disable-next-line max-len
  const tagsInJsx = Object.keys(tags).map((tag) => ( // ONE DAY THESE WILL BE LINKS TO TAG PAGES
    <div key={tag} className={`col-6 ${styles.tag}`}>
      #
      {tag}
    </div>
  ));

  return (
    <div className={`container-fluid ${styles.mainInfoBox}`}>
      <div className={`row ${styles.linkBox}`}>
        <Link
          to='/'
          className={`col-6 ${styles.link}`}
        >
          Home
        </Link>
        <Link
          to='/contact/'
          className={`col- ${styles.link}`}
        >
          Contact
        </Link>
      </div>
      <div className={`row ${styles.recentsBox}`}>
        <div className={`col-12 ${styles.infoTitle}`}>
          Recent Posts
        </div>
        {recentPosts}
      </div>
      <div className='row'>
        <div className={`col-12 ${styles.infoTitle}`}>
          All Tags
        </div>
        {tagsInJsx}
      </div>
    </div>
  );
}
