import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Socials from './Socials';

export default function InfoTile() {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
        edges {
                node {
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

  const recentPosts = data.allMarkdownRemark.edges.map(({ node }, index) => {
    if (index < 10) {
      return (
            <Link
                to={node.fields.slug}
                key={ index }
                className='col-12'>
                    {node.frontmatter.title}
            </Link>
      );
    }
    return null;
  });

  // eslint-disable-next-line max-len
  const tagsInJsx = Object.keys(tags).map((tag, index) => ( // ONE DAY THESE WILL BE LINKS TO TAG PAGES
            <div key={index} className='col-6'>
            #{tag}
        </div>));

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <Socials/>
            </div>
        </div>
        <div className='row'>
            {recentPosts}
        </div>
        <div className='row'>
            {tagsInJsx}
        </div>
    </div>
  );
}
