import React from "react";

const renderHotel = ()=> null;

const HotelsList = props => {
    if(!props.hotel) {
        return null;
    } 
    return <ul className="hotels-list">{}</ul>
}

export default HotelsList;