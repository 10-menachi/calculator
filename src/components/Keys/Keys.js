import React from 'react';
import './Keys.css';

const Keys = () => (
  <div>
    <div className="row">
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button" className="far-right">
        ÷
      </button>
    </div>
    <div className="row">
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" className="far-right">
        X
      </button>
    </div>
    <div className="row">
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button" className="far-right">
        -
      </button>
    </div>
    <div className="row">
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button" className="far-right">
        +
      </button>
    </div>
    <div className="row">
      <button type="button" className="double-span">
        0
      </button>
      <button type="button">.</button>
      <button type="button" className="far-right">
        =
      </button>
    </div>
  </div>
);

export default Keys;
