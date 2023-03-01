import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Media Forensics<br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Dec 26, 2022" text="Media forensics is the future. Let us explore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Jan 10, 2023" text="Decoding Deception, How Machine Learning is Revolutionizing Media Forensics" />
        <Article imgUrl={blog03} date="Jan 2, 2023" text="Deepfake Detection: Using AI to Uncover Digital Manipulation and Fraud" />
        <Article imgUrl={blog04} date="Sep 2, 2022" text="Fighting Misinformation: How Media Forensics is Combating Deception with Machine Learning" />
        <Article imgUrl={blog05} date="Sep 25, 2022" text="The Future of Forensics: How AI is Revolutionizing the Authentication of Media Assets" />
      </div>
    </div>
  </div>
);

export default Blog;
