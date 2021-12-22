import React from 'react';
import location from '../../assets/imgs/location.png';
import bed from '../../assets/imgs/bed.png';
import '../ProductPreview/ProductPreview.css';
import img1 from '../../assets/imgs/houses/1.jpg';
import img2 from '../../assets/imgs/houses/2.jpg';
import img3 from '../../assets/imgs/houses/3.jpg';
import { useHistory } from 'react-router';
const imgs = [img1, img2, img3, img1, img2, img3, img1, img2, img3];

function ProductPreview({ product }) {
  const history = useHistory();
  return (
    <div
      className='product-preview col'
      onClick={() => {
        history.push(`/buy/product/${product.id}`);
      }}
    >
      <img className='img' src={imgs[product.id]} />
      <div className='header flex'>
        <div className='price'>{product.price}$</div>
        <div className='bedrooms'>
          <span>{product.bedrooms}</span>
          <img className='icon' src={bed} />
        </div>
      </div>
      <div className='location'>
        <img className='icon' src={location} />
        <span>{product.location}</span>
      </div>
      <div className='footer flex'>
        <div className='distance'>{product.distance} meters </div>
        <div className='type'>{product.type}</div>
      </div>
    </div>
  );
}

export default ProductPreview;
