import React from 'react';
import linkedin from '../../content/assets/linkedin.png';
import github from '../../content/assets/github.png';

export default function Links() {
  return (
    <div className='container'>
      <div className='row'>
        <a
          href='https://github.com/willyd332'
          target='_blank'
          rel='noopener noreferrer'
          className='col-6'
        >
          <img
            src={github}
            style={{ width: '100px' }}
            alt='Github'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/will-d-88b69597/'
          target='_blank'
          rel='noopener noreferrer'
          className='col-6'
        >
          <img
            src={linkedin}
            style={{ width: '60px' }}
            alt='LinkedIn'
          />
        </a>
      </div>
    </div>
  );
}
