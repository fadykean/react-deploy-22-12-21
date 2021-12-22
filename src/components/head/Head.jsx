import React, { useEffect, useState } from "react";
import location from "../../images/location.png";
import "../head/Head.css";
import Filter from "../Filter/Filter";
import { useDispatch } from "react-redux";
import { loadProducts } from "../../store/actions/productActions";
function Head() {
  const [filterBy, setFilterBy] = useState({
    minPrice: 0,
    maxPrice: 8000000,
    minRooms: 0,
    maxRooms: 8,
    minDistance: 0,
    maxDistance: 100,
    location: "",
    type: "",
    // distance: 50,
  });

  const [showFilter, setShowFilter] = useState({
    price: false,
    bedrooms: false,
    type: false,
    distance: false,
  });
  const dispatch = useDispatch();

  const toggleFilter = (name) => {
    name = name.toLowerCase();
    setShowFilter({
      price: false,
      bedrooms: false,
      type: false,
      distance: false,
      [name]: !showFilter[name],
    });
  };

  useEffect(() => {
    dispatch(loadProducts(filterBy));
  }, [filterBy]);

  const handleChange = ({ target }) => {
    console.log("target: ", target);
    const { name, value } = target;
    if (name === "price") {
      setFilterBy({ ...filterBy, minPrice: value[0], maxPrice: value[1] });
    } else if (name === "bedrooms") {
      setFilterBy({ ...filterBy, minRooms: value[0], maxRooms: value[1] });
    } else if (name === "distance") {
      setFilterBy({ ...filterBy, minDistance: value[0], maxDistance:value[1]});
    }else if (name === "location") {
      setFilterBy({ ...filterBy, [name]: value });
    } else if (name === "type") {
      setFilterBy({ ...filterBy, [name]: value });
    }
  };

  return (
    <nav className="NavbarItem">
      <div className="menu-icon">
        <i className="fas fa-bars"></i>
      </div>
      <div className="input-container">
        <div>
          <img src={location} className="search-icon" />
          <input
            type="text"
            placeholder="     Search For location"
            name="location"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="buttons">
        <button className="head-btn" onClick={() => toggleFilter("price")}>
          Price
        </button>
        <button className="head-btn" onClick={() => toggleFilter("bedrooms")}>
          Bedrooms
        </button>
        <button className="head-btn" onClick={() => toggleFilter("type")}>
          Property Type
        </button>
        <button className="head-btn" onClick={() => toggleFilter("name")}>
          Who is the seller
        </button>
        <button className="head-btn" onClick={() => toggleFilter("distance")}>
          Additional filters
        </button>
        {showFilter.price && (
          <Filter
            name="price"
            handleChange={handleChange}
            filterBy={filterBy}
          />
        )}
        {showFilter.bedrooms && (
          <Filter
            name="bedrooms"
            handleChange={handleChange}
            filterBy={filterBy}
          />
        )}
        {showFilter.type && (
          <Filter name="type" handleChange={handleChange} filterBy={filterBy} />
        )}
        {showFilter.name && (
          <Filter name="name" handleChange={handleChange} filterBy={filterBy} />
        )}
        {showFilter.distance && (
          <Filter
            name="distance"
            handleChange={handleChange}
            filterBy={filterBy}
          />
        )}
      </div>
      <button className="preferences">My Preferences</button>
    </nav>
  );
}
export default Head;
