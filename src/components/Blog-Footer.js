import React from 'react';
import PropTypes from 'prop-types';
import frontmatter from './prop-types/frontmatter';
import Socials from './Socials';
import footerStyles from './styles/footer.module.css';

export default function BlogFooter({ post }) {
  const styles = footerStyles;
  return (
    <div className={`container-fluid ${styles.footerBox}`}>
      <div className='row' />
      <div className={`row ${styles.tagBox}`}>
        {post.frontmatter.tags.map((tag) => ( // ONE DAY THESE WILL BECOME LINKS TO TAG PAGES
          <div className='col-4' key={tag}>
            #
            {tag}
          </div>
        ))}
      </div>
      <div className='row'>
        <div className='col-12'>
          <Socials />
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
    frontmatter,
  }).isRequired,
};
