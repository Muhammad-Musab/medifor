import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Misinformation',
    text: 'the use of technology to identify and flag videos or images that have been manipulated using AI. By identifying and flagging these manipulated videos and images, it can help to stop the spread of misinformation that might be used to deceive people or influence public opinion.',
  },
  {
    title: 'Digital Media integrity',
    text: 'social media companies can use deepfake detection as a means of moderating content and removing false or misleading information, further maintaining the integrity of the platform.',
  },
  {
    title: 'Hybrid War',
    text: 'By detecting and removing such manipulated content, our technology can help to prevent it from being used to influence public opinion and interfere in political processes, which could be considered as a component in hybrid war strategy.',
  },
  {
    title: 'Fraud',
    text: 'Deepfake detection uses advanced algorithms to identify manipulated videos and images, which can reveal fraud in digital media and serve as evidence in legal proceedings.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Hybrid war is around and so its vital and important solution.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
