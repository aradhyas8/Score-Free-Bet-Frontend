import React from "react";
import "./secondary.scss";

const Secondary = () => {
  return (
    <div className="parent second-page">
      <div class="container secondary-page">
        <h1 class="text-center">Rewards</h1>
        <div class="d-flex mt-5">
          <div class="col-6">
            <h5>Award Type</h5>
            <ul class="list-group">
              <li class="list-group-item">Free Bet</li>
              <li class="list-group-item">Free Bet</li>
              <li class="list-group-item">Free Bet</li>
              <li class="list-group-item">Free Bet</li>
            </ul>
          </div>
          <div class="col-6">
            <h5>Award Amount</h5>
            <ul class="list-group">
              <li class="list-group-item">$10</li>
              <li class="list-group-item">$20</li>
              <li class="list-group-item">$30</li>
              <li class="list-group-item">$50</li>
            </ul>
          </div>
        </div>
        <div class="text-center mt-5">
          <a href="/">
            <button class="btn btn-primary">Home</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Secondary;

