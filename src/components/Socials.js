import React from 'react';

export default function Links() {
  return (
    <div className="container">
        <div className="row">
            <a
            href="https://github.com/willyd332"
            target="_blank"
            rel="noopener noreferrer"
            className='col-6'
        >
            <img
            src="http://pngimg.com/uploads/github/github_PNG39.png"
            style={{ width: '100px' }}
            />
        </a>

        <a
            href="https://www.linkedin.com/in/will-d-88b69597/"
            target="_blank"
            rel="noopener noreferrer"
            className='col-6'
        >
            <img
            src="data:image/png;base64,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"
            style={{ width: '60px' }}
            />
        </a>
        </div>
    </div>
  );
}
