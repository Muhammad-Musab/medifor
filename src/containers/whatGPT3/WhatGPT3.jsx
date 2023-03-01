import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is medifor?" text="for medafor, the application of scientific methods, techniques and technologies to extract, analyze, and preserve information and evidence of evidentiary value from multimedia sources for legal or investigatory purposes." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Audio" text=" Trust us to authenticate audio recordings and ensure the integrity of your audio media." />
      <Feature title="Video" text="Unlocking the hidden truths in digital media with our cutting-edge forensic analysis. We use advanced techniques to reveal manipulations, authenticate origins and provide reliable evidence for legal proceedings, and internal investigations in videos. Trust us to be the detectives of the digital world and give you the assurance of authenticity. " />
      <Feature title="Images" text="Expert analysis and authentication of digital images. From detecting manipulation to provenancing, our image forensic techniques provide reliable evidence for legal proceedings and investigations. Trust us to ensure the integrity of your digital images and uncover the truth." />
    </div>
  </div>
);

export default WhatGPT3;
