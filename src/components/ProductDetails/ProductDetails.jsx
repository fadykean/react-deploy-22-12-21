import React, { useEffect } from "react";
import img1 from "../../assets/imgs/houses/1.jpg";
import img2 from "../../assets/imgs/houses/2.jpg";
import img3 from "../../assets/imgs/houses/3.jpg";
import location from "../../assets/imgs/location.png";
import bed from "../../assets/imgs/bed.png";
import zoom from "../../assets/imgs/zoom.png";
import chat from "../../assets/imgs/chat.png";
import call from "../../assets/imgs/call.png";
// import user from '../../assets/data/users.json';
import userImg from "../../assets/imgs/user.jpeg";
import "./ProductDetails.css";
import { loadProduct } from "../../store/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Hat } from "../../assets/imgs/hat.svg";
import { ReactComponent as Medical } from "../../assets/imgs/medical.svg";
import { ReactComponent as Shopping } from "../../assets/imgs/shopping.svg";
import { ReactComponent as Restaurant } from "../../assets/imgs/restaurant.svg";

const imgs = [img1, img2, img3, img1, img2, img3];

export default function ProductDetails(props) {
  const { id } = props.match.params;
  const product = useSelector((state) => state.productReducer.currProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProduct(id));
  }, []);

  return product ? (
    <div className=" product-details">
      <img className="img" src={imgs[product.id]} />
      <div id="top" className="container col p10">
        <div className="header flex">
          <div className="price">
            <h2>{product.price}$</h2>
          </div>
          <div className="bedrooms">
            <span>{product.bedrooms}</span>
            <img className="icon" src={bed} />
          </div>
        </div>
        <div className="location">
          <img className="icon" src={location} />
          <span>{product.location}</span>
        </div>
        <div className="footer ">
          <div className="distance">{product.distance} meters </div>
          <div className="type">{product.type}</div>
        </div>
        <div className="desc">
          <h3>Property details</h3>
          <p> {product.desc}</p>
        </div>

        <div id="middle" className="information">
          <div className="headInfo">
            <img className="userImg" src={userImg} />
            <h1>fady</h1>
            <div className="zooom">
              <img className="zoom" src={chat} />
              <img className="zoom" src={call} />
              <img className="zoom" src={zoom} />
            </div>
          </div>
          <div className="inputInfo">
            <div>
              <input
                type="text"
                placeholder=" phone number"
                name="phone"
                className="input"
              />
              <button className="moreDetails">I want more details</button>
            </div>
          </div>
          <div className="helpInfo">
            <p>I want also help with find fit mortgage</p>
          </div>
        </div>

        <div id="end" className="neighborhood-details">
          <div className="top flex">
            <div className="right">
              <h2>Neighborhood Details</h2>
              <h3>Year to build: 1983</h3>
            </div>
            <img className="neighborhood-details-img" src={imgs[product.id]} />
          </div>
        </div>

        <div className="cards flex" id="end">
          <div className="card">
            <Shopping className="icon" style={{ fill: "#00E5C2" }} />
            <p>Shopping center near by </p>
          </div>
          <div className="card">
            <Restaurant className="icon" style={{ fill: "#FFB100" }} />
            <p>Shopping center near by </p>
          </div>
          <div className="card">
            <Hat className="icon" style={{ fill: "#002652" }} />
            <p>Shopping center near by </p>
          </div>
          <div className="card">
            <Medical className="icon" style={{ fill: "#E3001A" }} />
            <p>Shopping center near by </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>no product</div>
  );
}
