import React from 'react';
import './ProductCategory.css';
import ChevronRight from '../../assets/chevron-right-regular-24.png';



const ProductCategory = () => {
  return (
    <>
      <div className='space' style={{display: 'flex'}}>
        <h1 className='text-left'>New Arrivals</h1>
        <div class="button-container">
        <button class="button">View more <img src={ChevronRight} alt="" /></button>
    </div>
      </div>
      
      <div className='product-category'>
        <div id='first-container' className='container'>
          <div className='first-image image'></div>
          <div className='second-image image'></div>
          <div className='third-image image'></div>
          <div className='fourth-image image'></div>
        </div>
        <div id='second-container' className='container'>
          <div className='first-image image'></div>
          <div className='second-image image'></div>
          <div className='third-image image'></div>
          <div className='fourth-image image'></div>
        </div>

        {/* <div id='third-container' className='container'>
          <div className='first image'></div>
          <div className='second image'></div>
          <div className='third image'></div>
          <div className='fourth image'></div>
        </div>
        <div id='fourth-container' className='container'>
          <div className='first image'></div>
          <div className='second image'></div>
          <div className='third image'></div>
          <div className='fourth image'></div>
        </div>
        <div id='fifth-container' className='container'>
          <div className='first image'></div>
          <div className='second image'></div>
          <div className='third image'></div>
          <div className='fourth image'></div>
        </div>
        <div id='sixth-container' className='container'>
          <div className='first image'></div>
          <div className='second image'></div>
          <div className='third image'></div>
          <div className='fourth image'></div>
        </div>
        <div id='seventh-container' className='container'>
          <div className='first image'></div>
          <div className='second image'></div>
          <div className='third image'></div>
          <div className='fourth image'></div>
        </div>
        <div id='eight-container' className='container'>
          <div className='first image'></div>
          <div className='second image'></div>
          <div className='third image'></div>
          <div className='fourth image'></div>
        </div>
        <div id='nine-container' className='container'>
          <div className='first image'></div>
          <div className='second image'></div>
          <div className='third image'></div>
          <div className='fourth image'></div>
        </div> */}
      </div>


    </>
  );
}

export default ProductCategory;
