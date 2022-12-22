import React, { useState } from 'react';
import { SliderData } from './SliderData';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card'
import './Book.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const res = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const options = [{id:1,name:'Sample T',text:'they have one sample test, dummy one sample test, dummy',actualPrice:1500,price:500,discount:'40%'},
{id:2,name:'Sample t',text:'they have one sample test, dummy one sample test, dummy',actualPrice:1300,price:560,discount:'45%'},
{id:3,name:'Sample Te',text:'they have one sample test, dummy one sample test, dummy',actualPrice:1700,price:500,discount:'40%'},
{id:4,name:'Sample st',text:'they have one sample test, dummy one sample test, dummy',actualPrice:1700,price:800,discount:'80%'},
{id:5,name:'Sample Test',text:'they have one sample test, dummy one sample test, dummy',actualPrice:1600,price:400,discount:'40%'}]

const health = [{id:6,name:'Sample Tet',text:'they have one one sample test, dummy sample test, dummy',actualPrice:1700,price:800,discount:'40%'},
{id:7,name:'Sample est',text:'they have one sample one sample test, dummy test, dummy',actualPrice:1200,price:500,discount:'80%'},
{id:8,name:'Sample Tes',text:'they have one sample test, dummy one one sample test',actualPrice:1300,price:600,discount:'50%'},
{id:9,name:'Sample Tst',text:'they have one sample test one sample test, dummy, dummy',actualPrice:1800,price:500,discount:'30%'},
{id:10,name:'Sample Test',text:'they have one sample test, dummy one one sample test',actualPrice:1200,price:800,discount:'20%'}]

const book = [{id:11,name:'Sample data',text:'they have one sample test, dummy test data',actualPrice:1900,price:580,discount:'40%'},
{id:12,name:'Sample T',text:'they have one sample one sample test, dummy test, dummy',actualPrice:1800,price:700,discount:'40%'},
{id:13,name:'Sample t',text:'they have one sample test, dummy one one sample test',actualPrice:1600,price:400,discount:'30%'},
{id:14,name:'Sample e',text:'they have one sample one sample test, dummy test, dummy',actualPrice:1200,price:800,discount:'80%'},
{id:15,name:'Sample',text:'they have one sample test, dummy one one sample test',actualPrice:1500,price:500,discount:'50%'}]

const SHOW_BY_DEFAULT = 4;
const ImageSlider = ({ slides }) => {
  const [showAll, setShowAll] = useState(false);
  const [packageshowAll, setPackageshowAll] = useState(false);
  const [testshowAll, setTestshowAll] = useState(false);

  const visibleOptions = showAll ? options.length : SHOW_BY_DEFAULT;
  const visibleOptionsPackage = packageshowAll ? options.length : SHOW_BY_DEFAULT;
  const visibleOptionsTest = testshowAll ? options.length : SHOW_BY_DEFAULT;
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const toggleShowAllPackage = () => {
    setPackageshowAll(!packageshowAll);
  };
  const toggleShowAllTest = () => {
    setTestshowAll(!testshowAll);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  if (!Array.isArray(options) || options.length <= 0) {
    return null;
  }

  return (
    <>
    <Carousel
  swipeable={false}
  draggable={true}
  showDots={true}
  responsive={res}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
          >
            {(
              <img src={slide.image} alt='travelimage' className='image' />
            )}
          </div>
        );
      })}
    </Carousel>
    <div className='popular'>
      <span style={{display:'flex',justifyContent:'flex-start',marginLeft:3,lineHeight: 0}}>
    <h3>Popular Tests</h3>
    </span>
    <span style={{display:'flex',justifyContent:'flex-end',marginRight:3}}>
    {options.length > SHOW_BY_DEFAULT && (
        <div style={{cursor:'pointer'}} onClick={toggleShowAll}>
          {!showAll ? `View More` : "View Less"}
        </div>
      )}
      </span>
      <div className='popular-menu'>
      {options.slice(0, visibleOptions).map((data,id ) => (
        <Card data={data} key={id}/>
      ))}
    </div>
    </div>
    <div className='health-package'>
    <div className='popular-health'>
      <span style={{display:'flex',justifyContent:'flex-start',marginLeft:3,lineHeight: 0}}>
    <h3>Popular Health Packages</h3>
    </span>
    <span style={{display:'flex',justifyContent:'flex-end',marginRight:3}}>
    {health.length > SHOW_BY_DEFAULT && (
        <div style={{cursor:'pointer'}} onClick={toggleShowAllPackage}>
          {!packageshowAll ? `View More` : "View Less"}
        </div>
      )}
      </span>
      <div className='popular-menu'>
      {health.slice(0, visibleOptionsPackage).map((data,id) => (
        <Card data={data} key={id}/>
      ))}
    </div>
    </div>
    </div>
    <div className='popular-health'>
      <span style={{display:'flex',justifyContent:'flex-start',marginLeft:3,lineHeight: 0}}>
    <h3>Top Booked Tests</h3>
    </span>
      <span style={{display:'flex',justifyContent:'flex-end',marginRight:3}}>
    {book.length > SHOW_BY_DEFAULT && (
        <div style={{cursor:'pointer'}} onClick={toggleShowAllTest}>
          {!testshowAll ? `View More` : "View Less"}
        </div>
      )}
      </span>
      {!testshowAll?<Carousel
  swipeable={false}
  draggable={true}
  // showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  {book.slice(0, visibleOptionsTest).map((data,id ) => (
          <Card data={data} key={id}/>
        ))}
</Carousel>:<div className='popular-menu'>
      {book.slice(0, visibleOptionsTest).map((data,id) => (
        <Card data={data} key={id}/>
      ))}
    </div>}
    </div>
  </>
  );
};

export default ImageSlider;