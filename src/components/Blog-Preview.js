import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import frontmatter from './prop-types/frontmatter';
import previewStyle from './styles/post-preview.module.css';

export default function BlogPreview(props) {
  const styles = previewStyle;
  const { postInfo } = props;
  return (
    <div className='container-fluid'>
      <Link
        to={postInfo.fields.slug}
        className='row'
      >
        <div className='col-12'>
          {postInfo.frontmatter.title}
        </div>
        <div className={`col-12 ${styles.previewImg}`} style={{ background: `url(${postInfo.frontmatter.imageUrl}) center no-repeat fixed`, backgroundSize: 'cover' }} />
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
    frontmatter,
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
    excerpt: PropTypes.string,
  }).isRequired,
};
