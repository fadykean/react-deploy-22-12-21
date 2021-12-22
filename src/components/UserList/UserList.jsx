import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../assets/imgs/user.jpeg';
import { useHistory } from 'react-router';
import './UserList.css';
function UserList({ users }) {
  const history = useHistory();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className='user-list'>
      <Carousel responsive={responsive}>
        {users.map((user) => {
          return (
            <img
              src={img}
              alt='myimg'
              className='img'
              key={user.id}
              onClick={() => history.push(`/buy/user/${user.id}`)}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default UserList;
