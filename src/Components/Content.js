import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Content() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <main>
      <Carousel responsive={responsive}>
        <div><img src="/image/logo.jpeg" className='logo1' alt=''/></div>
        <div><img src='/image/logo1.jpeg' className='logo1' alt=''/></div>
        <div><img src='/image/logo2.jpeg' className='logo1' alt=''/></div>
        <div><img src='/image/logo4.jpeg' className='logo1' alt=''/></div>
        <div><img src='/image/logo4.jpeg' className='logo1' alt=''/></div>
        <div><img src='/image/logo5.jpeg' className='logo1' alt=''/></div>
        <div><img src='/image/logo5.jpeg' className='logo1' alt=''/></div>
        <div><img src='/image/logo5.jpeg' className='logo1' alt=''/></div>
        <div><img src='/image/logo5.jpeg' className='logo1' alt=''/></div>
        <div><img src='/image/logo5.jpeg' className='logo1' alt=''/></div>
        <div><img src='/image/logo5.jpeg' className='logo1' alt=''/></div>
      </Carousel>

      <Carousel responsive={responsive}>
        <div><img src="/image/logo.jpeg" className='logo1' alt=''/></div>
        <div><img src='/image/logo3.jpeg' className='logo1' alt=''/></div>
        <div><img src='/image/logo13.jpeg' className='logo1' alt=''/></div>
        <div><img src='/image/logo1.jpeg' className='logo1' alt=''/></div>
        <div><img src='/image/logo1.jpeg' className='logo1' alt=''/></div>
        <div><img src='/image/logo11.jpeg'className='logo1' alt=''/></div>
      </Carousel>

    </main>
  )
}

export default Content
