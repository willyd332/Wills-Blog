import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

export default function BlogFooter(props) {
  return (
    <div className='container-fluid'>
      <div className='row'>

      </div>
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
        <div className='col-12'>
          #tag1 #tag2 #tag3 #tag4 #tag5 ...
        </div>
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
  id: PropTypes.string,
  post: PropTypes.object, // FIX THIS
};

// Query For Finding Related Articles Based On Tags

// const data = useStaticQuery(graphql`
// query {
//   {
//     allMarkdownRemark(filter: {frontmatter: {tags: {in: ["lorem", "metal"]}}}) {
//       edges {
//         node {
//           frontmatter {
//             title
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// }
// `);