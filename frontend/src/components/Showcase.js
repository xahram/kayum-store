import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import showcase from '../image/new2.jpg';
import photo from '../image/new1.jpg';
//import photos from '../image/ca3.jpg';

const items = [
  {
    src: showcase,
    altText: '',
    caption: '',
  },
  {
    src: photo,
    altText: '',
    caption: '',
  },
  // {
  //   src: photos,
  //   altText: '',
  //   caption: '',
  // },
];

const Showcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="d-block w-100 h-50" src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.altText}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <section className="showcase">
        <div className="container mb-5">
          <div className="row height">
            <div className="col-md-7 mt-5">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={next}
                />
              </Carousel>
            </div>
             <div className="col-md-5 mt-5 mb-5 show-m pos">
              <div className="show-flex" >
                <h1>Welcome to Kuyam</h1>
                <h3>Buy Our Hand Made pottery Products </h3>
                <p className="d-md-none lead text-dark d-lg-block" style={{color:'#eee'}}>
                Kuyam is a business for pottery products. We design and produce lternatives to replace your daily life things with pottery products.
                 You can purchase our products with good quality.
                </p>
                <Link className="main-btn" to="/shop" >
                  Buy Now
                </Link>
              </div>
            </div> 
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
