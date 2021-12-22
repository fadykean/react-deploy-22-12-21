import React, { useEffect, useState } from 'react';
import './UserDetails.css';
import img from '../../assets/imgs/user.jpeg';
import zoom from '../../assets/imgs/zoom.png';
import call from '../../assets/imgs/call.png';
import chat from '../../assets/imgs/chat.png';
import { ReactComponent as Star } from '../../assets/imgs/star.svg';
import { ReactComponent as StarOutline } from '../../assets/imgs/star_outline.svg';
import { loadUser } from '../../store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
function UserDetails(props) {
  const { id } = props.match.params;
  const user = useSelector((state) => state.userReducer.currUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser(id));
  }, []);

  return user ? (
    
    <div className='user-details col space-between'>
     
      <div className=' flex'>
        <img src={img} alt='' className='img' />
        <div className='info'>
          <div>
          <div className='space-between flex'>
            <h2>{user.name}</h2>
            <div className='icons flex'>
              <div className='icon-container col'>
                <img className='icon' src={chat} />
                <span>chat</span>
              </div>
              <div className='icon-container col'>
                <img className='icon' src={call} />
                <span>call</span>
              </div>
              <div className='icon-container col'>
                <img className='icon' src={zoom} />
                <span>zoom</span>
              </div>
            </div>
            </div>
            <p>{ user.desc}</p>
          </div>
        </div>
      </div>

      <div className='col'>
        <div className='rate'>
          <h2>{user.rate}</h2>
          <h4>out of 10</h4>
        </div>
        <div className='col space-between'>
          <h2>Reviews </h2><br></br>
          <span>Write a Review</span><br></br>
        </div>
        {[...Array(5)].map((e, i) => {
          return (
            <div className='review flex'>
              {[...Array(5 - i)].map(() => {
                return <Star key={i} />;
              })}
              {[...Array(i)].map(() => {
                return <StarOutline key={i} />;
              })}
              <div className='container-progress flex'>
                <div className='progress'></div>
              </div>
            </div>
          );
        })}
        <div className='count bold'>{user.ratingCount} RATING</div>

        <div className='contact flex space-between'>
         <div className='name'> {user.name}</div>
         
         <button className='btn'>contact now</button>
        </div>
      </div>
    </div>
  ) : (
    <div> no user</div>
  );
}

export default UserDetails;
