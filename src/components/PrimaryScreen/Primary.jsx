import React, { useState } from "react";
import "./primary.scss";
import {Link} from 'react-router-dom'

export const Primary = () => {
  const [showInput, setShowInput] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  const handleSelect = (value) => {
    setShowPopup(false);
    if (value === "manual") {
      setShowInput(true);
    }
  };

  return (
    <div className="parent">
      <div className="container">
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="betAmount">Bet Amount:</label>
            <input
              type="text"
              className="form-control"
              id="betAmount"
              placeholder="Enter Bet Amount"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="winAmount">Win Amount:</label>
            <input
              type="text"
              className="form-control"
              id="winAmount"
              placeholder="Enter Win Amount"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="selectContact">Select Contact:</label>
            {showInput ? (
              <div>
                <input
                  type="text"
                  className="form-control"
                  id="selectContact"
                  placeholder="Enter Contact Name"
                />
                <i
                  className="fa fa-times"
                  onClick={() => setShowInput(false)}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
            ) : (
              <div>
                {showPopup ? (
                  <div className="popup">
                    <div className="popup-content">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleSelect("device")}
                      >
                        Select Contact from Device
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleSelect("manual")}
                      >
                        Enter Friend Name Manually
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleClick}
                  >
                    Select Contact
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="tipPercentage">Tip Percentage:</label>
            <input
              type="text"
              className="form-control"
              id="tipPercentage"
              placeholder="Enter Tip Percentage"
            />
          </div>
        </div>
        <div className="row">
        <Link className=" sub-button" to="/congrats">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Primary;
