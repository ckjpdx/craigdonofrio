import React from 'react';
import SimpleExpansionPanel from './SimpleExpansionPanel';
import reactlogo from './reactlogo.svg';
import './Portfolio.css';

function Portfolio(props) {
  const datastuff = [
    {
      title: 'Title 1',
      text: 'Text 1',
      picture: reactlogo
    },
    {
      title: 'Title 2',
      text: 'Text 2',
      picture: reactlogo
    }
  ];

  return (
    <div id="Portfolio">
      {datastuff.map(story => <SimpleExpansionPanel title={story.title} text={story.text} picture={story.picture} />)}
    </div>
  );
}

export default Portfolio;
