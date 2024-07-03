import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Home2 from "@src/components/Home/Home2.js";
import Home1 from '@src/components/Home/Home1.js';
import images from '@src/AllURL.js';
import useWindowSize from '@src/components/useWindowSize.js';

function Home({ load, toggleLoading, isMobile }) {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const { width, height } = useWindowSize();
  const minHeight = 572;


  const pages = isMobile ? 3 : 2;

  const totalImgNoMob = 10;
  const mobileCount = images.filter(obj => obj.for === 'Mobile').length;
  const totalImages = images.length; // Adjust if you have a different number of images

  useEffect(() => {
    // console.log('useEffect ran');
    // console.log(imagesLoaded, totalImages);
    if (isMobile) {
      // console.log('mobile bg loaded');
      toggleLoading(false);
    } else if (imagesLoaded >= (totalImages - mobileCount)) {
      // console.log('all loaded');
      toggleLoading(false);
    }
  }, [load, imagesLoaded]);

  const handleImageLoad = () => {
    // console.log('handleImageLoad ran');
    setImagesLoaded(prev => prev + 1);
    // console.log(imagesLoaded, totalImages);
  };

  const getImageUrlByIdAndWidth = (id, width) => {
    const image = images.find(img => img.id === id);
    if (!image) return null;

    const source = image?.sources.find(src => src.width === width) || image?.sources[0];

    return source?.url;
  };

  const getImage = (id, onLoad, widths) => {
    // console.log('getImage ran', id);
    // console.log('widths', widths);
    const image = images.find(img => img.id === id);
    if (!image) return null;

    if (!widths) {
      // console.log('undefined ran');
      return (
        <img
          src={image?.url}
          alt={image?.alt}
          style={image?.style}
          onLoad={onLoad}
          className={`${image?.className ?? ''} ${image?.id}`}
        />
      );
    }

    const size = [750, 1200, 1920, 3840];
    const sourceList = widths.map((width, index) => {
      const source = image?.sources.find(src => src.width === width) || image?.sources[0];
      const media = `(max-width:${size[index]}px)`;
      return (
        <source
          key={index}
          media={media}
          srcSet={source.url}
        />
      );
    });
    // console.log(sourceList);
    return (
      <picture>
        {sourceList}
        <img
          src={getImageUrlByIdAndWidth(id, 3840)}
          alt={image?.alt}
          onLoad={onLoad}
          className={`${image?.className ?? ''} ${image?.id}`}
        />
      </picture>
    );
  };

  return (
    <>
      <div className='home-main-container' style={{
        overflow: 'hidden',
        // height: `${viewportHeight}px`
      }}>
        {!isMobile ? (
          <>
            <Parallax pages={pages} className='animatio parallax-container' style={{ top: '0', left: '0', height: `${Math.max(height, minHeight)}px`, width: `${width}px` }}>
              <ParallaxLayer offset={0} speed={0}>
                {getImage('sky', handleImageLoad, [1440, 1920, 3840])}
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0}>
                {getImage('sun', handleImageLoad, [1440, 1920, 3840])}
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.1}>
                {getImage('clouds1', handleImageLoad, [1440, 1920, 3840])}
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.15}>
                {getImage('clouds2', handleImageLoad, [1440, 1920, 3840])}
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.28}>
                {getImage('birds', handleImageLoad, [1440, 1920, 3840])}
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.15}>
                {getImage('mountain1', handleImageLoad, [1440, 1920, 3840])}
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.2}>
                {getImage('mountain2', handleImageLoad, [1440, 1920, 3840])}
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.25}>
                {getImage('mountain3', handleImageLoad, [1440, 1920, 3840])}
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.3}>
                {getImage('mountain4', handleImageLoad, [1440, 1920, 3840])}
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.35}>
                {getImage('trees1', handleImageLoad, [1440, 1920, 3840])}
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.4}>
                {getImage('trees2', handleImageLoad, [1440, 1920, 3840])}
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0}>
                <Container fluid='sm' className="home-section" id="home">
                  <Container className="home-content">
                    <Home1 load={load} />
                  </Container>
                </Container>
              </ParallaxLayer>
              <ParallaxLayer offset={1} speed={0.1} style={{ backgroundColor: '#4F000B' }}>
                <Container fluid className="home-introduction">
                  <Home2 />
                </Container>
              </ParallaxLayer>
            </Parallax>
          </>
        ) : (
          <Container>
            <div className="home-section z-1" id="home">
              <div className="home-content">
                <Home1 load={load} />
              </div>
            </div>
            <div className="home-introduction">
              <Home2 />
            </div>
          </Container>
        )}
      </div>
    </>
  );
}

export default Home;
