import React, { useState } from "react";
import "./Filters.css";

const MIN = 0;
const MAX = 10;

const Filters = ({setJobFilter}) => {
  const [minValue, setMinValue] = useState(2);
  const [maxValue, setMaxValue] = useState(8);

  const [jobType, setJobType] = useState("IT");

  const applyChanges =()=>{
    const allChanges = {
        min:minValue,
        max:maxValue,
        job:jobType,
        timestamp: Date.now() 
    }
    setJobFilter(allChanges);
  }

  // Min thumb
  const handleMin = (e) => {
    const val = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(val);
  };

  // Max thumb
  const handleMax = (e) => {
    const val = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(val);
  };

  return (
    <div className="filter">

      {/* SLIDER LABELS */}
      <div className="range-labels">
        <span>{minValue} YOE</span>
        <span>{maxValue} YOE</span>
      </div>

      {/* DOUBLE SLIDER */}
      <div className="slider-container">
        <div className="slider-track"></div>

        <div
          className="slider-range"
          style={{
            left: `${(minValue / MAX) * 100}%`,
            right: `${100 - (maxValue / MAX) * 100}%`,
          }}
        ></div>

        <input
          type="range"
          min={MIN}
          max={MAX}
          value={minValue}
          onChange={handleMin}
          className="thumb thumb-min"
        />

        <input
          type="range"
          min={MIN}
          max={MAX}
          value={maxValue}
          onChange={handleMax}
          className="thumb thumb-max"
        />
      </div>

      {/* RADIO BUTTONS */}
      <div className="radio-group">
        <label className="radio">
          <input
            type="radio"
            value="IT"
            checked={jobType === "IT"}
            onChange={(e) => setJobType(e.target.value)}
          />
          <span>IT Jobs</span>
        </label>

        <label className="radio">
          <input
            type="radio"
            value="NON-IT"
            checked={jobType === "NON-IT"}
            onChange={(e) => setJobType(e.target.value)}
          />
          <span>Non-IT Jobs</span>
        </label>
      </div>

      {/* APPLY BUTTON */}
      <div className="filter-footer">
        <button className="apply-btn" onClick={()=>applyChanges()}>Apply Filters</button>
         <button className="apply-btn" onClick={()=>setJobFilter(null)}>Clear Filters</button>
      </div>
    </div>
  );
};

export default Filters;