import React from "react";
import HotelsList from "./Hotels/index.js";
import Filters from "./Filters/index";
import {filterData, hotelData} from "./data.js";
//TODO: import the data model for your list of filters

const App = () => (
  <div className="App">
    <Filters filters={filterData} />
    <HotelsList hotels={hotelData}/>
  </div>
);

export default App;
