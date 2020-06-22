import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import frontmatter from './prop-types/frontmatter';
import previewStyle from './styles/post-preview.module.css';

export default function BlogPreview({ postInfo }) {
  const styles = previewStyle;
  // REFACTOR
  const tags = [];
  for (let i = 0; i < 3; i += 1) {
    if (postInfo.frontmatter.tags[i]) {
      tags.push(`#${postInfo.frontmatter.tags[i]}`);
    } else {
      tags.push('');
    }
  }
  // REFACTOR
  return (
    <div className={`container-fluid${styles.previewBox}`}>
      <Link
        to={postInfo.fields.slug}
        className='row'
      >
        <div
          className={`col-10 offset-1 ${styles.previewImg}`}
          style={{ background: `url(${postInfo.frontmatter.imageUrl}) center no-repeat fixed`, backgroundSize: 'contain' }}
        >
          <div className={`row center-vertically ${styles.postInfoBox}`}>
            <div className={`col-12 text-center ${styles.postTitle}`}>
              {postInfo.frontmatter.title}
            </div>
            <div className={`col-12 ${styles.postExcerpt}`}>
              {postInfo.excerpt}
            </div>
            <div className={`row ${styles.postData}`}>
              { tags.map((tag) => (
                <div className='col-3' key={tag}>
                  {tag}
                </div>
              ))}
              <div className='col-3'>
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
