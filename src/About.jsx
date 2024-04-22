import React from 'react';
import Img from '../src/image/watch5.jpg';
import Common from './Common';

function About() {
  return (
    <>
      <Common page="About" btn="Contact now" imgsrc={Img} visit="/contact"/>
    </>
  );
}

export default About;
