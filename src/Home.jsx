import React from 'react';
import Common from './Common';
import Img from '../src/image/watch.jpg';

function Home() {
  return (
    <>
      <Common page="Home" btn="let's Buy" imgsrc={Img} visit="/service"/>
    </>
  );
}

export default Home;
