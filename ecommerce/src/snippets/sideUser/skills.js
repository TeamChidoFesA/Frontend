import React, { Component } from 'react';

const Skills = ({array}) => (
  array.map((item) => {
    return (
      <div>
        <p>{item.skill}</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"75%"}}>{item.value}%</div>
        </div>
      </div>
    )
  })
);

export default Skills;
