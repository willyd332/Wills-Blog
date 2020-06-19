import React from 'react';
import PropTypes from 'prop-types';

export default function BlogFooter({ post }) {
  return (
    <div className='container-fluid'>
      <div className='row' />
      <div className='row'>
        <div className='col-12'>
          Share To Social Media Buttons
        </div>
      </div>
      <div className='row'>
        <div className='col-4'>
          Related Post #1
        </div>
        <div className='col-4'>
          Related Post #2
        </div>
        <div className='col-4'>
          Related Post #3
        </div>
      </div>
      <div className='row'>
        {post.frontmatter.tags.map((tag) => ( // ONE DAY THESE WILL BECOME LINKS TO TAG PAGES
          <div className='col-1' key={tag}>
            #
            {tag}
          </div>
        ))}
      </div>
      <div className='row'>
        <div className='col-12'>
          One Day, I will add a coment section...
        </div>
      </div>
    </div>
  );
}

BlogFooter.propTypes = {
  post: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
    id: PropTypes.string,
    html: PropTypes.string,
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      author: PropTypes.string,
      tags: PropTypes.array,
      imageAlt: PropTypes.string,
      imageUrl: PropTypes.string,
    }),
  }).isRequired,
};
