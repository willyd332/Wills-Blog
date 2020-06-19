import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

export default function BlogPreview(props) {
  const { postInfo } = props;
  return (
    <div className='container'>
        <Link
                to={postInfo.fields.slug}
                className='row'
         >
            <div className='col-12'>
                {postInfo.frontmatter.title}
            </div>
            <div className='col-12'>
                This Will Be Image When I Figure It Out
            </div>
            <div className='col-12'>
                {postInfo.excerpt}
            </div>
            <div className='col-2 offset-1'>
                Other Info
            </div>
            <div className='col-2 offset-1'>
                Other Info
            </div>
            <div className='col-2 offset-1'>
                Other Info
            </div>
            <div className='col-2 offset-1'>
                {postInfo.frontmatter.date}
            </div>
        </Link>
    </div>
  );
}

BlogPreview.propTypes = {
  postInfo: PropTypes.shape({
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
};
