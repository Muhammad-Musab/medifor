// import React from 'react';
import './cta.css';

import React, { useState } from 'react';

function CTA() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    /* eslint-disable jsx-a11y/media-has-caption */
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(selectedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle file upload here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="gpt3__cta">
        <input type="file" onChange={handleFileSelect} accept="video/*" />
      </div>
      <div className="gpt3__cta-content">
        {previewUrl && (
        <video src={previewUrl} width={400} height={300} controls />)}
      </div>
      <div className="gpt3__cta-btn">
        <button type="submit" disabled={!file}>
          Upload
        </button>
      </div>
    </form>
  );
}

export default CTA;
