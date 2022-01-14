import React from 'react';

const Radio = (props) => {
  return (
    <div>
      <label>
        <input type="radio" name={props.name}/>
        <div className="bulb"></div>
        {props.label}
      </label>
    </div>
  );
};

export default Radio;