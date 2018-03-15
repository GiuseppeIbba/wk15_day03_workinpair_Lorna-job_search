import React, {Component} from 'react';

const TitleBar = (props) => {
  return (
    <div>
      <h1>Edinburgh Software Job Search</h1>
      <select value="">
        <option disabled value="">Filter by...</option>
        {/* something here to generate the options to select from */}
      </select>



    </div>
  )



}


export default TitleBar;
