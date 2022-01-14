import React from 'react';

const Checkbox = (props) => {
  return (
    <div>
      <label>
        <input type="checkbox" name={props.name}/>
        <div></div>
        {props.label}
      </label>
    </div>
  );
};

export default Checkbox;