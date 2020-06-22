import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import frontmatter from './prop-types/frontmatter';
import previewStyle from './styles/post-preview.module.css';

export default function BlogPreview(props) {
  const styles = previewStyle;
  const { postInfo } = props;
  return (
    <div className={'container-fluid' + styles.previewBox}>
      <Link
        to={postInfo.fields.slug}
        className='row'
      >
        <div
          className={`col-11 ${styles.previewImg}`}
          style={{ background: `url(${postInfo.frontmatter.imageUrl}) center no-repeat fixed`, backgroundSize: 'contain' }}
        >
          <div className={'row center-vertically ' + styles.postInfoBox}>
            <div className={'col-12 text-center ' + styles.postTitle}>
              {postInfo.frontmatter.title}
            </div>
            <div className={'col-12 ' + styles.postExcerpt}>
              {postInfo.excerpt}
            </div>
            <div className={'row ' + styles.postData}>
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
            </div>
          </div>
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
