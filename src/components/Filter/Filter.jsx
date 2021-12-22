import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../Filter/Filter.css";

function Filter({ handleChange, name, filterBy }) {
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (name === "price") {
      setValues([filterBy.minPrice, filterBy.maxPrice]);
    } else if (name === "bedrooms") {
      setValues([filterBy.minRooms, filterBy.maxRooms]);
    } else if (name === "type") {
      setValues([filterBy.type]);
    } else if (name === "name") {
      setValues([filterBy.type]);
    } else if (name === "distance") {
      setValues([filterBy.minDistance, filterBy.maxDistance]);
    }
  }, [filterBy]);
   
  return (
    <div className="filter">
      <div>
        <span>Your Budget</span>
      </div>
      <div className="values ">
        <Slider
          value={values}
          onChange={handleChange}
          valueLabelDisplay="auto"
          name={name}
          max={name === "price" ? 8000000 : 1000000  | name === "distance" ? 100 : 1 | name === "bedrooms" ? 8 : 1}
      // min={name === "price" ? 1000000 : 8000000  | name === "distance" ? 1 : 100 | name === "bedrooms" ? 1 : 8 }
        
        />
    
        <div className="fromTo">
          <div className="value1">
            <span className="from">From</span>
            <div className="border">{values[0]}</div>
          </div>

          <div className="value2">
            <span className="to">To</span>
            <div className="border">{values[1]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
